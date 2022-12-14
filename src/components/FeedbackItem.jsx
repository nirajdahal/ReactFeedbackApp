
import { useState } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {

    const [rating, setRating] = useState(item.rating)
    const [text, setText] = useState(item.text)

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);



    return (
        <Card reverse={false}>
            <div className="num-display">{rating}</div>

            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='purple' />
            </button>
            <div className="text-display"> {text}</div>

        </Card>
    )
}





export default FeedbackItem