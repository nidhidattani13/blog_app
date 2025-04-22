import axios from "axios";
import React, { useEffect, useState } from "react";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "test", author: "unknown", description: "pata nahi" },
  ]);
  useEffect(() => {
    fetchData();

    // return () => {
    //   second
    // }
  }, []);
  function fetchData() {
    axios
      .get("http://localhost:3000/api/blog/")
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        {blogs.map((blog) => (
          <tr key={blog.id}>
            <td>{blog.title}</td>
            <td>{blog.author}</td>
            <td>{blog.description}</td>
            <td></td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListBlog;
