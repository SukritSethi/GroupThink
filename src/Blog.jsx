import React from "react";
import SimpleAccordion from "./SimpleAccordion";

const Blog = () => {
  return (
    <div className="flex justify-center my-10 outline-4 outline-white-main">
      <div className="bg-white-main w-120 h-98 rounded-2xl overflow-x-hidden overflow-y-auto">
        <div className="m-2 p-2">
          <SimpleAccordion />
        </div>
      </div>
    </div>
  );
};

export default Blog;
