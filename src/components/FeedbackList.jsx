
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <h3 style={{ marginTop: '20px' }}>No Feedback </h3>
    }
    return (
        <div className="feedback-list" >

            {feedback.map((item) => (
                <div key={item.id}>
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                </div>

            ))}
        </div >


    )
}

FeedbackList.prototype = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired


    }))
}

export default FeedbackList