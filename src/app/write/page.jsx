"use client";
import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegImage } from "react-icons/fa";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import { GoVideo } from "react-icons/go";
import dynamic from "next/dynamic";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig'; // Adjust the import path as needed

const app = initializeApp(firebaseConfig);
const storage = getStorage(app); 

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return children;
};

const Page = () => {
  const [on, setOn] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    if (file) {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    }
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });
    // router.reload();
  };
  return (
    <div className="w-[100%] h-screen">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="text-[3rem] w-full outline-none bg-transparent mb-10 mt-3 px-5"
      />
      <div className="flex items-center gap-10">
        <div>
          <select
            className="text-black"
            placeholder="category"
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="style">style</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
          </select>
        </div>
        <button onClick={() => setOn(!on)}>
          <AiOutlinePlusCircle size={28} />
        </button>
        {on ? (
          <div className="flex items-center gap-4 overflow-hidden w-[8rem] duration-700">
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button>
              <label htmlFor="image">
                <FaRegImage size={25} />
              </label>
            </button>
            <button>
              <HiMiniArrowUpTray size={25} />
            </button>
            <button>
              <GoVideo size={25} />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="text-[1.3rem] mb-[20rem] py-5">
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story....."
        />
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="bg-green-600 px-3 py-2 absolute top-[1.1rem] rounded-lg left-[50%] text-white"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default function WrappedPage() {
  return (
    <ClientOnly>
      <Page />
    </ClientOnly>
  );
}

