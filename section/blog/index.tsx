import React, { useState } from "react";
import Card from "./card";
import Modal from "./modal";
const projects = [
  {
    title: "Comming Soon",
    img: `/blog/blog1.jpg`,
    desc: "A simple tool to create and send customizable HTTP requests, ideal for testing APIs quickly and efficiently.",
    postedOn: "Posted on January 1, 2025",
    color: "#fff",
  },
  {
    title: "Comming Soon",
    img: `/blog/blog1.jpg`,
   desc: "An implementation of the Builder pattern to construct complex HTTP requests step-by-step, improving code clarity and flexibility.",
    postedOn: "Posted on January 1, 2025",
    color: "#fff",
  },
  {
    title: "Comming Soon",
    img: `/blog/blog1.jpg`,
    desc: "A simple OTP (One-Time Password) facade to generate, send, and verify secure one-time codes for user authentication and validation.",
    postedOn: "Posted on January 1, 2025",
    color: "#fff",
  },
];
const Blog = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className="w-full h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-4xl text-white font-light ml-4`}>Blog</h1>
        <span className="block w-full h-7" />
        {projects.map((project, index) => {
          return (
            <Card index={index} {...project} setModal={setModal} key={index} />
          );
        })}
        <div className="flex justify-center">
          <button className=" rounded-full py-3 px-6 bg-black-100 text-white font-light mt-10">
            See More
          </button>
        </div>
      </div>
        <Modal modal={modal} blogs={projects} />
    </section>
  );
};

export default Blog;
