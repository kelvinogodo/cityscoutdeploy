import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landpage from '../components/Landpage'
import PopularProperties from '../components/PopularProperties'
import SearchInput from '../components/SearchInput'
import PropertyList from '../components/PropertyList'
import BlogShowCard from '../components/BlogShowCard'
import BlogSection from '../components/BlogSection'
import SeeAll from '../components/SeeAll'
import PopularHeader from '../components/PopularHeader'
import MobilePopularList from '../components/MobilePopularList'
import {useState} from 'react'
export default function Home({featuredposts,data}) {
  const [filter,setFilter]= useState(data ? data : '')
      const filterProperties = (title,keyword)=>{
        switch (title) {
          case 'location':
            setFilter(data.filter(item => (item.location.trim().includes(keyword))))
            break;
          case 'price':
            setFilter(data.filter(item => (item.price.trim().includes(keyword))))
            break;
          case 'description':
            setFilter(data.filter(item => (item.description.trim().includes(keyword))))
            break;
        
          default:
            setFilter(data)
            break;
        }
      }
  return (
    <main className={styles.container}>
      <Head>
        <title>Property Agents in Abakaliki</title>
        <meta name="description" content="A Property agency website, for properties around ebonyi state, Nigeria" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Landpage />
      <PopularHeader text={'latest properties'}/>
      <PopularProperties properties={filter}/>
      <MobilePopularList properties={filter}/>
      <SearchInput filterProperties={filterProperties} properties={filter}/>
      <PopularHeader text={'property listings'}/>
      {filter === [] ? <p>oops! we dont have what you are looking for </p> : <PropertyList properties={filter}/>}
      <SeeAll link={'/Properties'} text={'see available propeties'}/>
      <BlogShowCard />
      <PopularHeader text={'latest from blog'}/>
      <BlogSection posts={featuredposts ? featuredposts : ''}/>
      <SeeAll link={'/Blog'} text={'view more posts'}/>
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
export const getStaticProps = async ()=>{
  const [req,getProperties] = await Promise.all( 
    [
      fetch(`${getBaseApiUrl()}/api/posts`,
      {
        method:'GET',
        headers:{
          Accept: "application/json; charset=UTF-8",
          'Content-Type': 'application/json',
          'User-Agent': '*',
        }
      }),
      fetch(`${getBaseApiUrl()}/api/properties`,
      {
        method:'GET',
        headers:{
          Accept: "application/json; charset=UTF-8",
          'Content-Type': 'application/json',
          'User-Agent': '*',
        }
      })
    ]);
  const [featuredposts, data] = await Promise.all([req.json(),getProperties.json()])
  return{
      props:{
          featuredposts,data
      },
      revalidate:30,
  }
}