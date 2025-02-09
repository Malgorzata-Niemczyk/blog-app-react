import { Link } from "react-router-dom";

const BlogsList = ({ blogs, title }) => {
    
    return ( 
        <div className="blogs__list">
            <h2 className="blogs__list__heading">{ title }</h2>
            {blogs.map(blog => (
                <div className="blog__preview" key={blog.id}>
                    <img src={ blog.image } alt="blog post image" />
                    <div className="blog__preview__text">
                        <Link to={`/blog-details/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p className="blog__preview__text__body">{ blog.body.slice(0, 79) }...</p>
                            <p className="blog__date">{ blog.date }</p>
                            <p>Written by <span className="blog__author">{ blog.author }</span></p>
                        </Link>
                    </div>   
                </div>
            ))}
        </div>
     );
}
 
export default BlogsList;