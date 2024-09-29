import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { CardProps } from "../types/components";

const Card: React.FC<CardProps> = ({ img, title, desc }) => {
  return (
    <div className="text-white shadow-md rounded-lg overflow-hidden relative group">
      <img
        src={img}
        alt={title}
        className="w-full max-w-[300px] h-[350px] rounded-lg"
      />
      {/* overlay section */}
      <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
        <div className="space-y-4">
          <Slide cascade>
            <h1 className="text-3xl font-bold">{title}</h1>
            <Fade cascade damping={0.05}>
              <p>{desc}</p>
            </Fade>
            <div>
              <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                View
              </button>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Card;
