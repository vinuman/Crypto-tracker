import React from "react";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

let mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

const BackToTop = () => {
  const [scroll, setScroll] = useState(true);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div
      onClick={() => topFunction()}
      id="myBtn"
      className={` ${
        scroll ? "fixed" : "hidden"
      }  bottom-[1.5rem] right-[1.5rem] flex justify-center items-center w-[3rem] h-[3rem] rounded-full border-2 border-blue m-[1.5rem] cursor-pointer hover:border-white transition-all duration-300 group`}
    >
      <ArrowUpwardIcon className=" text-blue group-hover:text-white" />
    </div>
  );
};

export default BackToTop;
