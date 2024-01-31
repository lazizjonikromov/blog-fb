import React, { useState } from "react";
import { Blog } from "../../../Context/Context";
import moment from "moment";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DropDown from "../../../utils/DropDown";

const Comment = ({ item: comment, postId }) => {
  const { allUsers, currentUser } = Blog();
  const [drop, setDrop] = useState(false);
  const [more, setMore] = useState(false);
  const getUserData = allUsers.find((user) => user.id === comment?.userId);

  const { userId, commentText, created } = comment;

  return (
    <section className="border-b">
      <div className="flex items-center gap-5 pt-[1rem]">
        <img
          className="w-[2rem] h-[2rem] object-cover rounded-full"
          src={getUserData?.userImg || "/profile.jpg"}
          alt="user-img"
        />
        <div className="flex-1 flex justify-between">
          <div>
            <h2 className="text-sm capitalize">{getUserData?.username}</h2>
            <p className="text-sm text-gray-400">{moment(created).fromNow()}</p>
          </div>
          <div className="relative">
            {currentUser && currentUser?.uid === userId && (
              <>
                <button
                  onClick={() => setDrop(!drop)}
                  className="text-2xl hover:opacity-70"
                >
                  <BiDotsHorizontalRounded />
                </button>
                <DropDown
                  showDrop={drop}
                  setShowDrop={setDrop}
                  size="w-[10rem]"
                >
                  <Button click="" title="Edit this response" />
                  <Button click="" title="Delete" />
                </DropDown>
              </>
            )}
          </div>
        </div>
      </div>
      <p className="py-4 text-sm">
        {more ? commentText : commentText.substring(0, 100)}
        {commentText.length > 100 && (
          <button className="text-blue-500" onClick={() => setMore(!more)}>
            {more ? "...less" : "...more"}
          </button>
        )}
      </p>
    </section>
  );
};

export default Comment;

const Button = ({ click, title }) => {
  return (
    <button
      onClick={click}
      className="p-2 hover:bg-gray-200 text-black/80 w-full text-sm text-left"
    >
      {title}
    </button>
  );
};
