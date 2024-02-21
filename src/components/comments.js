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

  // const fetchComments = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://ksm-o008.onrender.com/api/v1/all-messages"
  //     );
  //     console.log("fetch Comments", response.data);
  //     setComments(response.data);
  //   } catch (error) {
  //     console.error("Error fetching comments", error);
  //   }
  // };

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://ksm-o008.onrender.com/api/v1/all-messages"
      );
      setComments(response.data);
      setCommentsShowing(response.data.slice(0, 10));
      setLoading(false);
    };
    fetchComments();
  }, []);

  useEffect(() => {
    setCommentsShowing(comments.slice(currentPage * 10 - 10, currentPage * 10));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstPost = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstPost, indexOfLastComment);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
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
        {commentsShowing.map((comment, index) => (
          <li
            key={comment.id}
            className="flex  flex-col-reverse md:gap-10 gap-5"
          >
            <div className="border  border-[#373737] h-[3px] md:mt-28"></div>
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
