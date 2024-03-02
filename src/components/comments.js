import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsShowing, setCommentsShowing] = useState([]);

  const commentsPerPage = 10;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const fetchComments = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://ksm-o008.onrender.com/api/v1/all-messages"
    );
    setComments(response.data);
    setCommentsShowing(response.data.slice(0, 10));
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // const deleteComment = async (id) => {
  //   try {
  //     const res = await axios.delete(
  //       `https://ksm-o008.onrender.com/api/v1/delete-message/${id}`
  //     );
  //     // Fetch updated comments after successful deletion
  //     if (res.status === 200) {
  //       fetchComments();
  //     }
  //   } catch (error) {
  //     console.error("Error deleting comment:", error);
  //   }
  // };

  useEffect(() => {
    setCommentsShowing(comments.slice(currentPage * 10 - 10, currentPage * 10));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstPost = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstPost, indexOfLastComment);
  // if (loading) {
  //   return;
  //   // <h2>Loading...</h2>;
  // }

  return (
    <>
      {loading && (
        <div
          className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center"
          style={{ background: "rgba(18, 18, 18, 0.8)" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/loading.gif`}
            alt="loading"
            className=" w-[200px] lg:w-[350px]"
          />
        </div>
      )}
      <div className="bg-[#000000] text-[#FFFFFF] p-8  lg:p-16 md:p-28">
        <button onClick={handleNavigate}>
          <div className=" flex">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/arrowBack.png`}
              alt="arrowBack"
              className="w-8 text-[#FFFFFF]"
            />
            <h3 className="ml-5 text-xl underline"> Back to Home</h3>
          </div>
        </button>
        <h1 className="mt-16 text-2xl md:text-4xl font-semibold<  ">
          COMMENTS
        </h1>
      </div>
      <ul className="bg-[#323232] text-[#FFFFFF] p-8 md:p-28 h-[100%] ">
        {commentsShowing.map((comment) => (
          <li
            key={comment._id}
            className="flex  flex-col-reverse md:gap-10 gap-5"
          >
            <div className="border  border-[#373737] h-[3px] md:mt-28"></div>
            {/* <button
              className=" md:w-[100%] lg:w-[60%] text-right text-xl text-red-700 "
              onClick={() => deleteComment(comment._id)}
            >
              Delete Comment
            </button> */}
            <div className="mt-5 md:mt-10">
              <strong className="text-2xl ">{comment.name}</strong>
              <p className="text-xl mt-5 md:w-[100%] lg:w-[60%]  h-fit  leading-8 ">
                {comment.message}
              </p>
            </div>
          </li>
        ))}
        <Pagination
          comments={comments}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          commentsPerPage={commentsPerPage}
          totalComments={comments.length}
          currentComments={currentComments}
        />
      </ul>
    </>
  );
};

export default Comments;
