import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">This page has left orbit.</h1>
        <p className="not-found__text">
          The page you're looking for doesn't exist or has moved. Let's get you back on course.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound
