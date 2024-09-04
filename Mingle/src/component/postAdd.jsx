import './postAdd.css'
const PostAdd=(props)=>{
return(
    <>
    <div className="div-post-add-main">
        <h1>Post</h1>
        <div className="form-data-div">
        <form >
            <label>Title:</label>
            <input type="messagebox" placeholder="Title"/>
            <label>Content:</label>
            <input type="text" placeholder="Content"/>
            <label>Tags:</label>
            <input type="text" placeholder="tags"/>
            <label>Image:</label>
            <input type="file" placeholder="Image" id='file-in'/>
        </form>
        </div>
        <button className='btn-edit'onClick={props.handlePostToggle}>Post</button>
    </div>
    </>
)
}
export default PostAdd;