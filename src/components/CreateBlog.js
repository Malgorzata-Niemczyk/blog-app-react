const CreateBlog = () => {
    return ( 
        <div className="create__blog">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                />
                <label> Blog body:</label>
                <textarea 
                    required
                ></textarea>
                <label>Date:</label>
                <input type="date" required/>
                <label>Blog author:</label>
                <select>
                    <option value="Jane Doe"></option>
                    <option value="John White"></option>
                    <option value="Lauren Smith"></option>
                </select>
                <button type="submit">Add Blog</button>
            </form>
        </div>
     );
}
 
export default CreateBlog;