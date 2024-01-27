import React from "react";
import UseFetch from "../../hooks/UseFetch";
import Loading from "../../Loading/Loading";
import PostsCard from "./PostsCard";

const Posts = () => {
  const { data, loading } = UseFetch("posts");

  return (
    <section className="flex flex-col gap-[2.5rem]">
      {loading ? (
        <Loading />
      ) : (
        data.map((post, i) => <PostsCard post={post} key={i} />)
      )}
    </section>
  );
};

export default Posts;
