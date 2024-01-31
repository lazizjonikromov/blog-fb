import React, { useEffect, useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { Blog } from "../../../../Context/Context";
import { db } from "../../../../firebase/firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import UseSingleFetch from "../../../hooks/UseSingleFetch";

const SavedPost = ({ post }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { currentUser } = Blog();
  const { data } = UseSingleFetch("users", post?.userId, "savePost");

  useEffect(() => {
    setIsSaved(data && data?.find((item) => item.id === post.id)) !== -1;
  }, [data, post?.id]);

  const hadleSave = async () => {
    try {
      if (currentUser) {
        const saveRef = doc(
          db,
          "users",
          currentUser?.uid,
          "savePost",
          post?.id
        );

        if (isSaved) {
          await deleteDoc(saveRef);
          toast.success("Post has been unsaved");
        } else {
          await setDoc(saveRef, {
            ...post,
          });
          toast.success("Post has been Saved");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button onClick={hadleSave} className="hover:opacity-60 mb-2">
        <CiSaveDown2
          className={`text-2xl pointer-event-none ${
            isSaved ? "!text-yellow-600" : ""
          } `}
        />
      </button>
    </>
  );
};

export default SavedPost;
