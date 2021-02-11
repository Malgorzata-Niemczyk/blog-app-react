import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="home">
            {blogs && <BlogsList blogs={blogs} title="All Our Blogs!" />}
        </div>
    );
}
 
export default Home;