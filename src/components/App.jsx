import React from 'react';
import { deleteBlog, fetchBlogs } from '../services/blogService';
import BlogDetail from './blog-detail/BlogDetail';
import BlogList from './blog-list/BlogList';
import CreateBlog from './create-blog/CreateBlog';

function App(props) {
  const [blogsData, setBlogsData] = React.useState([]);
  const [selectedBlog, setSelectedBlog] = React.useState({});
  const [showCreateBlog, setShowCreateBlog] = React.useState(false);
  const [isEditState, setIsEditState] = React.useState(false);

  React.useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogsData(data);
      setSelectedBlog(data[0]);
    } catch (error) {
      console.error('Error while fetching blogs data', error);
    }
  };

  const createBlog = () => {
    setSelectedBlog({});
    setIsEditState(false);
    setShowCreateBlog(true);
    getBlogs();
  };

  const showOrHideForm = state => {
    if (state === 'edit' || state === 'create') {
      getBlogs();
    }
    setShowCreateBlog(!showCreateBlog);
  };

  const selectBlog = id => {
    const selectedBlog = blogsData.filter(b => b.id === id)[0];
    setSelectedBlog(selectedBlog);
  };

  const deleteSelectedBlog = id => {
    try {
      const data = deleteBlog(id);
      getBlogs();
    } catch (error) {
      console.error(`Error while deleting blog ${id}`, error);
    }
  };

  return (
    <div className="main">
      <div className="header">
        <div>My Blogs</div>
        <button className="create-blog" onClick={() => createBlog()}>
          {' '}
          Create Blog
        </button>
      </div>
      <div className="content">
        <div className="side">
          <h3>Past Blogs</h3>
          <BlogList onBlogSelect={id => selectBlog(id)} blogs={blogsData}></BlogList>
        </div>
        <div className="main-content">
          <BlogDetail
            blog={selectedBlog}
            editBlog={() => {
              setIsEditState(true);
              setShowCreateBlog(!showCreateBlog);
            }}
            deleteBlog={id => {
              deleteSelectedBlog(id);
            }}
          ></BlogDetail>
        </div>
      </div>
      {showCreateBlog && (
        <CreateBlog
          data={selectedBlog}
          showHideForm={state => showOrHideForm(state)}
          edit={isEditState}
        ></CreateBlog>
      )}
    </div>
  );
}

export default App;
