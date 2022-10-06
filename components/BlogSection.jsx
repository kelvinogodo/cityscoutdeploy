import BlogCard from './BlogCard'
const BlogSection = ({posts}) => {
  return (
    <section className='property-list blog-section'>
        {Array.isArray(posts) && posts.slice(posts.length-3, posts.length-1).reverse().map(
          item =>  <BlogCard key={item._id} item ={item}/>
        )}
    </section>
  )
}

export default BlogSection