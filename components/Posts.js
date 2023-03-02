import { addAllPost, selectPost } from "@/public/src/features/postSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8091/api/v1/post";

  useEffect(() => {
    const fetchAllPost = () => {
      const response = axios
        .get(FACEBOOK_CLONE_ENDPOINT)
        .then((respone) => {
          dispatch(addAllPost(respone.data));
        })
        .catch((error) => {});
    };
    fetchAllPost();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
