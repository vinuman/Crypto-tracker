import React, { useState } from "react";

const CoinInfo = ({ title, desc, light }) => {
  const [flag, setFlag] = useState(false);
  const readableDesc = desc
    ? desc.slice(0, 400) +
      "<span style='color:var(--grey)'> Read More...</span>"
    : null;
  const fullDesc =
    desc + "<span style='color:var(--grey)'> Read Less...</span>";
  return (
    <>
      <div className={`p-8 m-[1.5rem] ${light ? "bg-white" : "bg-darkgrey"}`}>
        <h2
          className={`md:m-[1rem] md:text-[28px] text-[20px] font-bold ${
            light ? "text-black" : "text-white"
          }`}
        >
          {title}
        </h2>

        {desc && desc.length > 300 ? (
          <p
            dangerouslySetInnerHTML={{ __html: flag ? fullDesc : readableDesc }}
            className={`md:m-[1rem] text-[0.8rem] md:text-[1rem] desc cursor-pointer transition-all duration-300̵ ${
              light ? "text-black" : "text-white"
            }`}
            onClick={() => setFlag(!flag)}
          ></p>
        ) : (
          <p
            dangerouslySetInnerHTML={{ __html: desc }}
            className={`md:m-[1rem] text-[0.8rem] md:text-[1rem] desc cursor-pointer transition-all duration-300̵ ${
              light ? "text-black" : "text-white"
            }`}
          ></p>
        )}
        {!desc && (
          <div>
            <p className=" font-medium ml-4 text-[1rem] text-grey">
              No details available :(
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CoinInfo;
