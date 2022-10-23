// import { Link } from "react-router-dom";

function Button({ title, address, id }) {
  return (
    <div className="flex justify-center items-center">
      <button id={id} className="rounded-none lg:w-4/5 w-5/6 h-20 center p-4 mt-5 bg-slate-700 ">
        <a href={address} target="_blank" rel="noreferrer" className="pointer">
          <h2>{title}</h2>
        </a>
      </button>
    </div>
  );
}

export default Button;
