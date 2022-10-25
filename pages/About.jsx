import Head from 'next/head'
import Image from 'next/image'
import {GiProgression} from 'react-icons/gi'
import {RiShieldUserFill} from 'react-icons/ri'
import {SiFsecure} from 'react-icons/si'
import {BsLightbulb} from 'react-icons/bs'
const About = () => {
  return (
    <>
    <Head>
      <title>
        property Agents in Abakaliki
      </title>
      <meta name="description" content="City Scout Realtors is a reliable property agency based in Abakaliki." />
      <link rel="icon" href="/favicon.jpg" />
    </Head>
    <main className="about-page">
      <section className="about-landpage" >
      <Image src='/cityScoutlogo.png' alt='city scout logo' width={500} height={400} className='about-img'/>
        <div className="about-landpage-container">
          <span className="about-landpage-header">
            <h1>About City Scout Realtors</h1>
            <span className="line"></span>
          </span>
          <p>city scout realtors is a property agent based in Abakaliki. Our focus is to help people find, and buy legal properties, whether buildings or land , in the state. We are also committed to delivering quality property development services. 
          </p>
          <p>
          the team is made up of experienced and young professionals with a taste for innovation and quality property brokerage.
          </p>
        </div>
      </section>
      <section className="team-section">
        <span className="team-section-header">
          <h2>What we stand for </h2>
          <span className="line"></span>
        </span>
        <div className="team-card">
          <div className="team-card-img-container">
            <img src="/light (1).png" alt="" />
          </div>
          <div className="team-card-text-container">
            <h2>Core value</h2>
            <div className="about-text-container-card">
              <BsLightbulb className='about-icons'/>
              <span className="about-text-container-span">
                <h3>Innovation</h3>
                <span className="line about-line"></span>
                <p>We employ recent technology and creativity to deliver holistic service.</p>
              </span>
            </div>
            <div className="about-text-container-card">
              <SiFsecure className='about-icons'/>
              <span className="about-text-container-span">
                <h3>Integrity</h3>
                <span className="line about-line"></span>
                <p> We consistently uphold ethical principles and morals. We do not say it, we do it.</p>
              </span>
            </div>
            <div className="about-text-container-card">
              <RiShieldUserFill className='about-icons'/>
              <span className="about-text-container-span">
                <h3>Customer Satisfaction</h3>
                <span className="line about-line"></span>
                <p>You are important and that is why your satisfaction comes ahead of anything else.</p>
              </span>
            </div>
            <div className="about-text-container-card">
              <GiProgression className='about-icons'/>
              <span className="about-text-container-span">
                <h3>Continuous Growth</h3>
                <span className="line about-line"></span>
                <p>We learn everyday and we improve every second.</p>
              </span>
            </div>
          </div>
        </div>
        <div className="team-card reverse">
        <div className="team-card-img-container">
            <img src="/vision.webp" alt="" />
          </div>
          <div className="team-card-text-container">
            <h2>Our Vision</h2>
            <span className="line"></span>
            <p>To easily connect real estate investors to the right properties in Ebonyi state and drive seamless acquisition.</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-card-img-container">
            <img src="/target.webp" alt="" />
          </div>
          <div className="team-card-text-container">
            <h2>our mision</h2>
            <span className="line"></span>
            <p>To unlock the full potential of real estate in the region through technology and innovation.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default About