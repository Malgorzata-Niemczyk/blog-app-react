import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const pageRedirection = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE',
        }).then(() => {
            pageRedirection.push('/')
        })
    };

    return ( 
        <div className="blog__details">
            {error && <div className="error__message">{ error }</div>}
            {isPending && <div className="loading__message">Loading...</div>}
            {blog && (
            <>
                <header>
                    <div className="header__bg" style={{
                         backgroundImage: `url(${ blog.image })`
                    }}>
                        <div className="hero__bg"></div>
                        <div className="header__text">
                            <h2>{ blog.title }</h2>
                            <p>{ blog.date } | Written by { blog.author }</p>
                        </div>
                    </div>
                </header>
                <article>
                    <p>{ blog.body }</p>
                </article>
                <div className="blog__details__delete__btn">
                    <button onClick={handleClick}>Delete Blog</button>
                </div>
            </>
            )}
        </div>
     );
}
 
export default BlogDetails;