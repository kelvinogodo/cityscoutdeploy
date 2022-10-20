import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import parse from 'html-react-parser'
const Posts = ({post}) => {
  return (
    <main className='page-container'>
      <Head>
        <title>{post.seoTitle ? seoTitle : post.title}</title>
        <meta name="description" content={`${post.meta ? post.meta : post.title}`} />
        <meta name="author" content={`${post.author ? post.author : 'ogodo dominic'}`} />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <section className="blog-header">
        <Link href='/Blog'>blog</Link>
        <span>/</span>
        <Link href='/'> home</Link>
      </section>
      <section className="post-container">
        <div className="post-img-container" style={{position:'relative'}}>
          <Image src={`${post.image}`} alt={`${post.title} image`} layout='fill' priority placeHolder='blur' blurDataURL={`${post.image}`}/>
        </div>
        <div className="post-text-container">
          <span className="post-date-container">
            <p> {post.date}</p>
          </span>
          <p>Author : {post.author}</p>
          <h1>{post.title}</h1>
          <div className="ProseMirror my-post-body">
            {parse(post.body)}
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
  const req = await fetch(`${getBaseApiUrl()}/api/posts/${id}`,
  {
    method:'GET',
    headers:{
      Accept: "application/json; charset=UTF-8",
      'Content-Type': 'application/json',
      'User-Agent': '*',
    }
  })
  const post = await req.json()
  console.log(post)
  return{
    props:{
      post
    }
  }
}

export default Posts
