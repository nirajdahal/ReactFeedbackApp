
import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);


    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (e.target.value != null || e.target.value.length > 0) {
            setText(e.target.value);

        }

        if (text === '') {
            setbtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }
        else {
            setbtnDisabled(false)
            setMessage(null)
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if (feedbackEdit.edit === true) {

                updateFeedback(feedbackEdit.item.id, newFeedback)

                setText("")
                setbtnDisabled(true)
            }
            else {
                addFeedback(newFeedback)
                setText("")
                setbtnDisabled(true)
            }

        }

    }
    return (
        <Card>
            <form onSubmit={handleSubmit} >
                <h2>How would you rate your service with us?</h2>

                <RatingSelect select={(rating) => { setRating(rating) }} />
                <div className="input-group">
                    <input
                        value={text}
                        onChange={handleTextChange}
                        type="text"
                        placeholder='Write a review'

                    />

                    <Button
                        type='submit'
                        version='primary'
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>


                </div>
                {message && <div className='message'>

                    {message}
                </div>}

            </form>
        </Card>
    )
}

export default FeedbackForm