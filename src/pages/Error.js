import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h2>Oops! It's A Dead End</h2>

          <Link to='/' className='btn-primary'>Back Home</Link>
        
      </div>
    </section>
  );
}

export default Error
