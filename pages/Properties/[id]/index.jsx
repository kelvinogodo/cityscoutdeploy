import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'
const Properties = ({property}) => {
  return (
    <main className='page-container'>
      <Head>
        <title>{property.title}</title>
        <meta name="description" content={`${property.title}`}/>
        <meta name="author" content='ogodo dominic' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-header" style={{backgroundImage:'url(/realestate (1).jpg)'}}>
      </div>
      <section className='page'>    
          <div className="left-description-body">
            <Image src={`${property.frontViewImage}`} alt="" className="upper-grid" width={420} height={420} placeholder='blur' blurDataURL={`${property.frontViewImage}`} />
            <div className="lower-grid">
              <Image src={`${property.sideViewImage}`} className='img' alt="" width={420} height={420} placeholder='blur' blurDataURL={`${property.sideViewImage}`}/>
              <Image src={`${property.backViewImage}`} alt="" className='img' width={420} height={420} placeholder='blur' blurDataURL={`${property.backViewImage}`}/>
            </div>
          </div>
          <div className="right-description-body">
            <div className="agent-info-header">
              <h4>property information</h4>
            </div>
            <div className="description-card">
              <span className='key'>property location :</span><span className='value'>{property.location}</span>
            </div>
            <div className="description-card">
              <span className='key'> property description :</span><span className='value'>{property.description}</span>
            </div>
            <div className="description-card">
              <span className='key'> property price :</span><span className='value'>{property.price}</span>
            </div>
            <div className="agent-info">
              <div className="agent-info-header">
                <h4>contact an agent</h4>                
              </div>
              <div className="description-card">
                <span className='key'>mobile</span><span className='value'>07042244530</span>
              </div>
              <div className="description-card">
              <span className='key'>email</span><span className='value'>kelvinchukwuebuka@gmail.com</span>
              </div>
            </div>
            <div className="description-card">
              <Link href='/Properties'>back to home</Link>
            </div>
          </div>
      </section>
    </main>
  )
}
// config.js
const app = {
  API_URL: process.env.API_URL ? process.env.API_URL : "https://localhost:3000",
};

export const getBaseApiUrl = () => {
  const url = process.browser ? "/api" :app.API_URL
  if (process.browser) {
    return "/api";
  }
// see `app` defined in my previous reply
  return url;
};

export const getServerSideProps = async (context)=>{
    const id = context.params.id
    const req = await fetch(`${getBaseApiUrl()}/api/properties/${id}`,
    {
      method:'GET',
      headers:{
        Accept: "application/json; charset=UTF-8",
        'Content-Type': 'application/json',
        'User-Agent': '*',
      }
    })
    const property = await req.json()
    return{
      props:{
        property,
      }
    }
  }
  
export default Properties

