import React from 'react'

function FeedbackStats({ feedback }) {
    const calculateAverageRating = () => {
        let average = feedback.reduce((acc, curr) => {
            return acc + curr.rating
        }, 0) / feedback.length
        return average
    }
    return (
        <div className='feedback.stats'>

            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(calculateAverageRating()) ? 0 : calculateAverageRating()}</h4>
        </div>
    )
}

export default FeedbackStats