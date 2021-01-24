export const fetchBlogs = async () => {
  const response = await fetch('https://salesforce-blogs.herokuapp.com/blogs/api/');
  return await response.json();
};

export const saveBlog = async ({ title, text }) => {
  const response = await fetch('https://salesforce-blogs.herokuapp.com/blogs/api/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, text })
  });
  return await response.json();
};

export const editBlog = async ({ id, title, text }) => {
  const response = await fetch(`https://salesforce-blogs.herokuapp.com/blogs/api/${id}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, text })
  });
  return await response.json();
};

export const deleteBlog = async id => {
  const response = await fetch(`https://salesforce-blogs.herokuapp.com/blogs/api/${id}`, {
    method: 'delete'
  });
  return await response.json();
};
