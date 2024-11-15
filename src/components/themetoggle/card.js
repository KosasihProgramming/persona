import React from "react";
import { Link } from "react-router-dom";

function GlassCard(props) {
  const truncateDescription = (text) => {
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };
  return (
    <div
      className=" w-[15rem] md:w-[20rem] mb-12 mx-auto p-4 text-center text-white border border-blue-400  hover:translate-y-[-2rem] duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.14)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(9.5px)",
        WebkitBackdropFilter: "blur(9.5px)",
      }}
    >
      <img
        src={props.img}
        className="w-full object-cover mx-auto mb-4"
        alt="Portfolio"
      />
      <h2 className="text-base md:text-xl font-semibold mb-2">{props.title}</h2>
      <p className="md:text-sm text-justify mb-4 text-xs">
        {truncateDescription(props.desc)}
      </p>
      <p className="text-blue-200 text-left font-medium  text-xs md:text-sm">{props.info}</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link
          to={props.url}
          class=" mt-1 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-300 relative bg-neutral-800 w-full border text-left p-3 text-gray-50 text-xs font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default GlassCard;
