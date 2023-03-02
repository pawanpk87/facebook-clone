import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "@/public/src/features/postSlice";

function CreatePost() {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8091/api/v1/post";

  const dispatch = useDispatch();

  const { data: session } = useSession();

  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const [imageToPost, setImageToPost] = useState(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    const formData = new FormData();

    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);
    formData.append("file", imageToPost);

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then((respone) => {
        console.log("respone is:-");
        console.log(respone);
        inputRef.current.value = "";
        dispatch(addPost(respone.data));
        removeImage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user.name}?`}
          ></input>
          <button hidden onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      {imageToPost && (
        <div className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-100 transition duration-150">
          <Image
            src={imageToPost}
            width={200}
            height={200}
            className="object-contain"
          />
          <RiDeleteBin6Line
            className="h-8 hover:text-red-500 cursor-pointer"
            onClick={removeImage}
          />
        </div>
      )}

      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 hover:cursor-pointer rounded-md">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>

        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 hover:cursor-pointer rounded-md"
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            onChange={addImageToPost}
            ref={hiddenFileInput}
            type="file"
            hidden
            accept="image/*"
          />
        </div>

        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 hover:cursor-pointer rounded-md">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
