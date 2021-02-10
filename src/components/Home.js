import { useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
        image: 'https://cdn.pixabay.com/photo/2018/04/23/14/38/adorable-3344414_1280.jpg', 
        title: `How to Enrich Your Dog's Life Starting Today!`,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        author: 'Jane Doe',
        id: 1
    },
    {
        image: 'https://cdn.pixabay.com/photo/2019/06/18/11/32/cat-4282123_1280.jpg',
        title: '12 Tips for Raising a Healthy, Happy Kitten',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        author: "John White",
        id: 2
    },
    {
        image: 'https://cdn.pixabay.com/photo/2020/05/01/02/26/hamster-5115246_1280.jpg',
        title: 'Hamster Diet Tip - Hamster Fresh Food Guide!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        author: 'Lauren Smith',
        id: 3
    },
    {
        image: 'https://cdn.pixabay.com/photo/2018/09/29/21/18/rabbit-3712339_1280.jpg',
        title: '5 Ways to Care for an Older Rabbit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        author: 'Jane Doe',
        id: 4
    },
    {
        image: 'https://cdn.pixabay.com/photo/2020/05/13/21/03/dog-food-5168940_1280.jpg',
        title: 'Factors to Consider When Choosing the Best Food for Your Pet',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        author: 'John White',
        id: 5
    }
  ])

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