import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

function Cards({ data }) {
  return (
    <div className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full h-10  left-0">
        <div className="flex items-center justify-between  py-3 px-8 mb-3">
          <h5> {data.filesize} </h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose />
            ) : (
              <GoDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center `}
          >
            <h3 className="text-sm font-semibold"> {data.tag.tagTitle} </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
