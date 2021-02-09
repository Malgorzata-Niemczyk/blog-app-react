const BlogsList = () => {
    return ( 
        <div className="blogs__list">
            <h2>All Our Blogs!</h2>
            {blogs.map(blog => (
                <div className="blog__preview" key={blog.id}>
                    <img src={ blog.image } />
                    <div className="blog__preview__text">
                        <h2>{ blog.title }</h2>
                        <p className="blog__preview__text__body">{ blog.body }</p>
                        <p>Written by <span className="blog__author">{ blog.author }</span></p>
                    </div>   
                </div>
            ))}
        </div>
     );
}
 
export default BlogsList;