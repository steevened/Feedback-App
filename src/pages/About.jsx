import Card from '../components/share/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>This is an app for leave feedback for a product or a service</p>
        <p>Version 1.0.0</p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default About
