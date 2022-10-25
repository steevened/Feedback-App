import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './share/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function Feedbackitem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes onClick={() => deleteFeedback(item.id)} color='pink' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='pink' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Feedbackitem
