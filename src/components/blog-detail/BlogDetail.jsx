import React from 'react';

function BlogDetail(prop) {
  const { blog } = prop;
  const blogDate = new Date(blog.timestamp).toLocaleDateString();
  return (
    <div className="blog-detail">
      <h3>{blog.title}</h3>
      <div className="description">{blog.text}</div>
      <div> Created on : {blogDate}</div>
      <button onClick={() => prop.editBlog()}>Edit</button>
      <button onClick={() => prop.deleteBlog(blog.id)}>Delete</button>
    </div>
  );
}

export default BlogDetail;
