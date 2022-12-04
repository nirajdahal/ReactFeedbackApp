import React from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)
    const calculateAverageRating = () => {
        let average = feedback.reduce((acc, curr) => {
            return acc + curr.rating
        }, 0) / feedback.length
        return average.toFixed(1)
    }
    return (
        <div className='feedback.stats'>

            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(calculateAverageRating()) ? 0 : calculateAverageRating()}</h4>
        </div>
    )
}

export default FeedbackStats