import { useState } from "react";
import Services from "./Services";
import Button from "./Button";

export default function Home({ show }) {
  return (
    <div>
      {/* <div className="bg-gray-700 place-content-between">
        <img
          className="w-[20rem] h-[10rem] object-cover"
          src="public/cylinder-01.png"
          alt="Cylinder -01"
        />
        <p>Gas cylinder services</p>
        <img
          className="w-[25rem] h-[10rem] object-cover"
          src="public/cylinder-02.png"
          alt=""
        />
      </div> */}

      <p>
        A Description about the company
      </p>
    </div>
  );
}
