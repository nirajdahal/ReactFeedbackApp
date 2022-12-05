import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";



const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {


    const [isLoading, setLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //fetch feedback

    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')

        const data = await response.json()
        setFeedback(data)
        setLoading(false)
    }
    //Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })
            setFeedback(feedback.filter((item) => {
                return item.id !== id
            }))
        }
    }

    //Add Feedback
    const addFeedback = async (newFeedback) => {

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
        console.log(feedback)

    }



    //update feedback
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()
        const updatedFeedbackItem = feedback.map(item => (item.id === id ? { ...item, ...data } : item))
        setFeedback(updatedFeedbackItem)
        setFeedbackEdit({
            item: {},
            edit: false

        })
        window.location.reload(false);

    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;