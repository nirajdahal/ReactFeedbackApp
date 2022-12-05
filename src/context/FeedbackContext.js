import { createContext, useState } from "react";
import { FeedbackData } from "../data/FeedbackData";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {


    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    //Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => {
                return item.id !== id
            }))
        }
    }

    //Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
        console.log(feedback)

    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //update feedback
    const updateFeedback = (id, updItem) => {
        const updatedFeedbackItem = feedback.map(item => (item.id === id ? { ...item, ...updItem } : item))
        setFeedback(updatedFeedbackItem)
        setFeedbackEdit({
            item: {},
            edit: false

        })

    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;