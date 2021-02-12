import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
    return (
        <div className="home">
            {error && <div className="error__message">{ error }</div>}
            {isPending && <div className="loading__message">Loading...</div>}
            {blogs && <BlogsList blogs={blogs} title="All Our Blogs!" />}
        </div>
    );
}
 
export default Home;