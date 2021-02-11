import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (res.status !== 200) {
                    throw Error('Sorry, could not fetch the data for that resource :(')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, []);

    return (
        <div className="home">
            {error && <div className="error__message">{ error }</div>}
            {isPending && <div className="loading__message">Loading...</div>}
            {blogs && <BlogsList blogs={blogs} title="All Our Blogs!" />}
        </div>
    );
}
 
export default Home;