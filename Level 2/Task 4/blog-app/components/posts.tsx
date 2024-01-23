"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [blogss, setBlogss] = useState([]);
  useEffect(() => {
    async function getBlogs() {
      const resp = await axios.post("api/getposts");
      setBlogss(resp.data.blogs);
    }
    getBlogs();
  }, []);

  return (
    <div className="w-1/2">
      {blogss.length !== 0 ? (
        blogss.map((blog: any) => (
          <div className="p-2" key={blog.title}>
            <div>Title: {blog.title}</div>
            <div>Content: {blog.content}</div>
            <div>Author: {blog.authorEmail}</div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Posts;
