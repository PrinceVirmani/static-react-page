import React, { useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const data = [
    {
      desc: "There are a few ways to add Lorem Ipsum text automatically in React.",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "There are a few ways to add Lorem Ipsum text automatically in React.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "There are a few ways to add Lorem Ipsum text automatically in React.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" },
    },
  ];
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 ">
      {data.map((item, index) => (
        <Cards data={item} />
      ))}
    </div>
  );
}

export default Foreground;
