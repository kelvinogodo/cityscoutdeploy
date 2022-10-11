import React from 'react'
import Head from 'next/head'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdUpdate} from 'react-icons/md'
import {AiOutlineSafety} from 'react-icons/ai'
import {GiProgression} from 'react-icons/gi'
import {FaCity} from 'react-icons/fa'
const Service = () => {
  return (
    <main className='service-page'>
      <Head>
        <title>
          real estate brokerage and development
        </title>
        <meta name="description" content="a property agency website, for properties around ebonyi state, Nigeria" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <section className="service-card-container">
        <div className="service-card">
          <GiProgression />
          <h2>property brokerage</h2>
          <p>
            Acquiring the right property can be daunting. our goal is to take that stress off your shoulder and help you find the best property which meets your investment target
          </p>
        </div>
        <div className="service-card">
          <FaCity />
          <h2>real estate development</h2>
          <p>
            Property development becomes easier with professionals. we have a team of architects, surveyors, and engineers who will drive qaulity development of your lands and buildings for higher economic values
          </p>
        </div>
      </section>
    </main>
  )
}

export default Service