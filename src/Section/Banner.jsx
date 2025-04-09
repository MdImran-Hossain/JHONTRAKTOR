import React from 'react'
import Bgbanner from '../assets/b.png'
const Banner = () => {
  return (
    <>
        <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${Bgbanner})` }}
    >
      <div className="container m-auto">
        <div>
          <h1>We Prepare</h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner
