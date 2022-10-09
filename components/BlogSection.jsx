import BlogCard from './BlogCard'
const BlogSection = ({posts}) => {
  return (
    <section className='property-list blog-section'>
        {Array.isArray(posts) && posts.reverse().slice(posts.length - 3, posts.length).map(
          item => <BlogCard key={item._id} item={item}/>
        )}
    </section>
  )
}

export default BlogSection