import React from "react";
import UseFetch from "../../../hooks/UseFetch";
import Loading from "../../../Loading/Loading";
import PostsCard from "../../../Common/Post/PostsCard";

const ProfileHome = ({ getUserData }) => {
  const { data, loading } = UseFetch("posts");
  const userPost =
    data && data?.filter((post) => post?.userId === getUserData?.userId);
  // console.log(userPost);
  return (
    <div className="flex flex-col gap-5 mb-[4rem]">
      {userPost.length === 0 && (
        <p className="text-gray-500">
          <span className="capitalize">{getUserData?.username}</span> has no
          posts
        </p>
      )}  
      {loading ? (
        <Loading />
      ) : (
        userPost && userPost?.map((post, i) => <PostsCard post={post} key={i} />)
      )}
    </div>
  );
};

export default ProfileHome;
