import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { data } from "../data";
import { ShuffleArray } from "../helper";
import Options from "./Options";
import Tooltip from "./Tooltip";

function Header() {
  const useTextContext = useContext(TextContext);

  const SetRandomData = () => {
    useTextContext.setTextData(
      ShuffleArray(data) || { paragraph: "", sentence: "", word: "" }
    );
  };

  return (
    <div className="flex items-center justify-between">
      <Options />
      <button onClick={SetRandomData} className="text-dark group relative">
        <Tooltip text="متن تصادفی" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
          <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
          <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}

export default Header;
