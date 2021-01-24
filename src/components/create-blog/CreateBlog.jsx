import React from 'react';
import { editBlog, saveBlog } from '../../services/blogService';

function CreateBlog(props) {
  const { id, title, text } = props.data;

  const [blogTitle, setBlogTitle] = React.useState(title);
  const [blogText, setBlogText] = React.useState(text);
  const saveBlogPost = async () => {
    try {
      const data = await saveBlog({ title: blogTitle, text: blogText });
      props.showHideForm('create');
    } catch (error) {
      console.error('Error while saving the blog', error);
      props.showHideForm('create');
    }
  };

  const editBlogPost = async () => {
    try {
      const data = await editBlog({ id: id, title: blogTitle, text: blogText });
      props.showHideForm('edit');
    } catch (error) {
      console.error('Error while saving the blog', error);
      props.showHideForm('edit');
    }
  };
  const cancelBlogPost = () => {
    props.showHideForm();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="blog-field">
          <p>Title:</p>
          <input type="text" value={blogTitle} onChange={e => setBlogTitle(e.target.value)} />
        </div>
        <div className="blog-field">
          <p>Text:</p>
          <textarea
            name="text"
            value={blogText}
            onChange={e => setBlogText(e.target.value)}
          ></textarea>
        </div>

        {props.edit ? (
          <button className="save-btn" onClick={() => editBlogPost()}>
            Edit
          </button>
        ) : (
          <button className="save-btn" onClick={() => saveBlogPost()}>
            Save
          </button>
        )}
        <button className="save-btn" onClick={() => cancelBlogPost()}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateBlog;
