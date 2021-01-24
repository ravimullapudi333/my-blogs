import React, { useState } from 'react';

function BlogList(props) {
  const { blogs } = props;

  return (
    <div className="blog-list">
      {blogs &&
        blogs.map((b, i) => {
          return (
            <div key={b.id} className="item" onClick={() => props.onBlogSelect(b.id)}>
              {i + 1}. {b.title}
            </div>
          );
        })}
    </div>
  );
}

export default BlogList;
