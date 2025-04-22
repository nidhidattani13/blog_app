import axios from "axios";
import React, { useState } from "react";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:3000/api/blog/", formData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="author"
          placeholder="Enter author"
          value={formData.author}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBlog;
