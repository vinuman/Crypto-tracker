import React, { useState } from "react";

const CoinInfo = ({ title, desc }) => {
  const [flag, setFlag] = useState(false);
  const readableDesc = desc
    ? desc.slice(0, 400) +
      "<span style='color:var(--grey)'> Read More...</span>"
    : null;
  const fullDesc =
    desc + "<span style='color:var(--grey)'> Read Less...</span>";
  return (
    <>
      <div className="p-8 bg-darkgrey m-[1.5rem]">
        <h2 className="m-[1rem] text-[28px] font-bold">{title}</h2>

        {desc && desc.length > 300 ? (
          <p
            dangerouslySetInnerHTML={{ __html: flag ? fullDesc : readableDesc }}
            className="m-[1rem] desc cursor-pointer transition-all duration-300"
            onClick={() => setFlag(!flag)}
          ></p>
        ) : (
          <p
            dangerouslySetInnerHTML={{ __html: desc }}
            className="m-[1rem] desc cursor-pointer transition-all duration-300"
          ></p>
        )}
      </div>
    </>
  );
};

export default CoinInfo;
