import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            "image": "../assets/img/dog-img.jpg", 
            "title": "How to Enrich Your Dog's Life Starting Today!",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
            "author": "Jane Doe",
            "id": 1
        },
        {
            "image": "../assets/img/cats-img.jpg",
            "title": "12 Tips for Raising a Healthy, Happy Kitten",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
            "author": "John White",
            "id": 2
        },
        {
            "image": "../assets/img/hamster-img.jpg",
            "title": "Hamster Diet Tip - Hamster Fresh Food Guide!",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
            "author": "Lauren Smith",
            "id": 3
        },
        {
            "image": "../assets/img/rabbit-img.jpg",
            "title": "5 Ways to Care for an Older Rabbit",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
            "author": "Jane Doe",
            "id": 4
        },
        {
            "image": "../assets/img/dog-food-img.jpg",
            "title": "Factors to Consider When Choosing the Best Food for Your Pet",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
            "author": "John White",
            "id": 5
        }
    ]);

    return ( 
        <div className="home">

        </div>
     );
}
 
export default Home;