import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
    }, [])

    return (
        <div className="home">
            {isPending && <div className="loading__message">Loading...</div>}
            {blogs && <BlogsList blogs={blogs} title="All Our Blogs!" />}
        </div>
    );
}
 
export default Home;