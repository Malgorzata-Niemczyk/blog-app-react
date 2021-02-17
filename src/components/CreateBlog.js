import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('Jane Doe');
    const [image, setImage] = useState('');
    const [isPending, setIsPending] = useState(false);
    const pageRedicrection = useHistory(); // storing the useHistory hook in a variable to invoke it

    const handleSubmit = (event) => {
        event.preventDefault();

        // create a blog object to output later the data in the db.json file upon submitting
        let newBlog = {
            title,
            body,
            date,
            author,
            image
        };

        // console.log(newBlog);

        // making a post request to add a new blog
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBlog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
            // using the push() method to redirect to the home page
            pageRedicrection.push('/');
        })

        // clearing the input fields after submitting the data
        setTitle('');
        setBody('');
        setDate('');
        setAuthor('Jane Doe');
    }

    return ( 
        <div className="create__blog">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    required
                />
                <label> Blog body:</label>
                <textarea
                    value={body}
                    onChange={event => setBody(event.target.value)}
                    required
                ></textarea>
                <label>Date:</label>
                <input 
                    type="text"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                    required
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={event => setAuthor(event.target.value)}
                >
                    <option value="Jane Doe">Jane Doe</option>
                    <option value="John White">John White</option>
                    <option value="Lauren Smith">Lauren Smith</option>
                </select>
                <label>Image URL:</label>
                <input 
                    type="text"
                    value={image}
                    onChange={event => setImage(event.target.value)}
                    required />
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button type="submit" disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;