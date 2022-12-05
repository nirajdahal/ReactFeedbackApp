
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';


function FeedbackList() {

    const { feedback, isLoading } = useContext(FeedbackContext)





    if (!isLoading && (!feedback || feedback.length === 0)) {

        return <h3 style={{ marginTop: '20px' }}>No Feedback </h3>
    }

    return isLoading ? <Spinner /> : (

        <div className="feedback-list" >
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}

                        />
                    </motion.div>

                ))}
            </AnimatePresence>
        </div >


    )

    // return (
    //     <div className="feedback-list" >

    //         {feedback.map((item) => (
    //             <div key={item.id}>
    //                 <FeedbackItem
    //                     key={item.id}
    //                     item={item}
    //                     handleDelete={handleDelete}
    //                 />
    //             </div>

    //         ))}
    //     </div >


    // )
}



export default FeedbackList