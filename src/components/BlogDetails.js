import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

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
                </>
            )}
        </div>
     );
}
 
export default BlogDetails;