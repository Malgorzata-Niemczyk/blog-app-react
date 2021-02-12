import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div className="error__message">{ error }</div>}
            {isPending && <div className="loading__message">Loading...</div>}
            {data && <BlogsList blogs={data} title="All Our Blogs!" />}
        </div>
    );
}
 
export default Home;