import { useState } from 'react';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('Jane Doe');

    const handleSubmit = (event) => {
        event.preventDefault();

        // create a blog object to output later the data in the db.json file upon submitting
        let newBlog = {
            title,
            body,
            date,
            author
        };

        // console.log(newBlog);

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
                <button type="submit">Add Blog</button>
            </form>
        </div>
     );
}
 
export default CreateBlog;