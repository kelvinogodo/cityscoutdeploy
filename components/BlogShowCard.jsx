import Link from 'next/link'
const BlogShowCard = () => {
  return (
    <section className='blog-show-card' data-aos={'fade-up'}>
        <div className="blog-show-card-text-container">
          <h1>
            have a property in ebonyi state for sale ?
          </h1>
          <p>There is no better way to sell your land and houses faster than let us handle it. We have buyers, who are ready to pay for their worth. </p>
          <Link href="/Contact" className="sort-btn">
            let us know
          </Link>
        </div>
        <Image src="/realestate (17).jpg" alt="" height={450} width={420}className="blog-show-card-img" priority blurDataUrl={'/realestate (17).jpg'} placeholder='blur'/> 
    </section>
  )
}

export default BlogShowCard