"use client";

export default function Form() {
  return (
    <form action="">
      {/* Upload avatar */}
      <div>
        <h2>upload Avatar</h2>
        <label htmlFor="file-input">
          <img src="" alt="Subir archiivo" />
          <span>drag and drop or click to upload</span>
        </label>
        <input type="file" id="file-input" />
        <p>upliad your photo (JPG or PNG, max size: 500KB</p>
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
