import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const PostCard = ({ post }) => {
  const [saved, setSaved] = useState(false);

  return (
    <Link to={`/post/${post.id}`}>
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
          rotateX: 2,
          rotateY: -2,
        }}
        transition={{
          duration: 0.25,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="group overflow-hidden rounded-3xl bg-white shadow-md"
      >
        {/* Image */}
        <img
          src={post.image}
          alt={post.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Content */}
        <div className="p-5">
          {/* Top */}
          <div className="mb-4 flex justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSaved(!saved);
              }}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition ${
                saved ? "bg-red-100" : "bg-[#F3F0FF]"
              }`}
            >
              {saved ? "❤️" : "🤍"}
            </button>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-[#F3F0FF] px-4 py-2 text-sm font-medium text-[#6D4AFF]">
              {post.category}
            </span>

            <span className="rounded-full bg-[#E9F8EC] px-4 py-2 text-sm font-bold text-[#37A84B]">
              {post.loops} L
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-2xl font-bold text-[#2D2D2D]">
            {post.title}
          </h3>

          {/* User */}
          <p className="mb-5 text-gray-500">Publicado por {post.user}</p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 rounded-2xl bg-[#6D4AFF] py-3 font-semibold text-white transition hover:scale-[1.02]">
              Intercambiar
            </button>

            <button className="rounded-2xl border border-gray-200 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Chat
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PostCard;
