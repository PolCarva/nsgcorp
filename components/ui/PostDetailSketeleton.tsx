import React from "react";
import Container from "./Container";

const PostDetailSketeleton = () => {
  return (
    <Container>
      <div className="flex flex-col gap-5 w-full md:w-2/3 mx-auto">
        <div className="h-24 bg-slate-300 animate-pulse md:w-1/2" />
        <div className="h-60 bg-slate-300 animate-pulse md:w-full" />
      </div>
    </Container>
  );
};

export default PostDetailSketeleton;
