"use client";

import Image from "next/image";
import iconUpload from "../../../public/assets/images/icon-upload.svg";

export default function Form() {
  return (
    <form action="" className="w-full">
      {/* Upload avatar */}
      <div className="text-white p-3 font-medium">

        {/* File input */}
        <h2 className="capitalize pb-2">upload Avatar</h2>
        <div className="border-dashed border-2 border-gris w-full rounded-lg p-3 background-file">
          <label
            htmlFor="file-input"
            className="grid place-items-center gap-4 cursor-pointer"
          >
            <Image
              className="bg-file-icon"
              src={iconUpload}
              alt="Icon upload"
            />
            <span>Drag and drop or click to upload</span>
          </label>
        </div>
        <input className="hidden" type="file" id="file-input" />
        <p className="font-thin ">
          Upliad your photo (JPG or PNG, max size: 500KB
        </p>
      </div>

      {/* Full name */}
      <div>
        <label htmlFor="fullname">full name</label>
        <input type="text" id="fullname" />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email">email address</label>
        <input type="email" id="email" placeholder="example@gmail.com" />
      </div>

      {/* GitHub Username */}
      <div>
        <label htmlFor="github-username">GitHub username</label>
        <input type="text" id="github-username" />
      </div>

      <input type="suubmit" value="Generate My Ticket" />
    </form>
  );
}
