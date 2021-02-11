import { useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    return (
        <div className="home">
            <BlogsList blogs={blogs} title="All Our Blogs!" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;