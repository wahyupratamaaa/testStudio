import React, { useState, useEffect } from "react";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState("");
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() === "") return;
    if (comment.length > 150) {
      alert("Komentar terlalu panjang. Maksimal 150 karakter.");
      return;
    }

    const newComment = {
      name: "anomali",
      date: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      comment: comment,
      profilePic:
        "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1736210996~exp=1736214596~hmac=67d86a0dab7249b0e91d086c63643059da9111b37956008785bfee71750e3ad4&w=1480",
      replies: [],
    };

    const updatedComments = [...comments, newComment];
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
    setComment("");
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = (commentIndex) => {
    if (reply.trim() === "") return;

    const newReply = {
      name: "anomali",
      date: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      reply: reply,
    };

    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.push(newReply);

    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
    setReply("");
    setSelectedCommentIndex(null);
  };

  return (
    <div className="flex gap-3 items-center px-16 py-10 mb-10">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex items-center gap-4">
          <div className="border-l-[5px] border-blue-500 h-10"></div>
          <span className="text-gray-700 text-3xl font-semibold">
            Komentar Localstorage
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <img
            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
            alt="user profile"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex flex-col w-full md:w-5/12">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              className="w-full h-32 border border-gray-300 rounded-lg px-4 py-2 text-gray-500 text-sm font-medium"
              placeholder="Tulis komentar disini..."
            />
            <div className="flex justify-between mt-2">
              <button
                onClick={handleCommentSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 text-sm"
              >
                Kirim
              </button>
              <span className="text-gray-500 text-sm">
                {comment.length}/150
              </span>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 w-1/2" />

        {comments.map((commentData, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-5 w-full">
            <img
              src={commentData.profilePic}
              alt="user profile"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex flex-col w-full md:w-5/12">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm font-medium">
                  {commentData.name}
                </span>
                <span className="text-gray-500 text-sm">
                  • {commentData.date}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {commentData.comment}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedCommentIndex(index)}
                  className="text-blue-500 text-sm font-medium"
                >
                  Balas
                </button>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 text-sm font-medium"
                >
                  Hapus
                </button>
              </div>

              {selectedCommentIndex === index && (
                <div className="mt-4">
                  <textarea
                    value={reply}
                    onChange={handleReplyChange}
                    className="w-full h-20 border border-gray-300 rounded-lg px-4 py-2 text-gray-500 text-sm font-medium"
                    placeholder="Tulis balasan disini..."
                  />
                  <button
                    onClick={() => handleReplySubmit(index)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                  >
                    Balas
                  </button>
                </div>
              )}

              {commentData.replies && commentData.replies.length > 0 && (
                <div className="mt-4 pl-6">
                  {commentData.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="flex flex-col gap-2 mb-4">
                      <div className="flex gap-2 items-center">
                        <img
                          src={commentData.profilePic}
                          alt="user profile"
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="text-gray-500 text-sm font-medium">
                          {reply.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          • {reply.date}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">{reply.reply}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
