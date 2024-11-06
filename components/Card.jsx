import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative z-0 flex flex-col  p-4 mb-20 min-h-[600] w-[80%] max-w-[500]">
      <div className="absolute top-0 left-0 z-10 bg-gradient-to-bl from-[#3FDEA5] to-[#3FDED5] min-h-[500] min-w-[480] -translate-x-14 -translate-y-14 rounded-3xl "></div>
      <div className="absolute top-0 left-0 z-20 bg-[#F5F8FF] flex flex-col p-4 rounded-3xl min-w-[500] min-h-[600] shadow-xl shadow-[#3FDEA5]/30 w-[80%] max-w-[500">
        {children}
      </div>
    </div>
  );
};

export default Card;
