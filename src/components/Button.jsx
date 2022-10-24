// import { Link } from "react-router-dom";

function Button({ title, address, id }) {
  return (
    <div className="flex flex-row justify-center items-center p-0 gap-3 drop-shadow-2x w-full">
      <button
        id={id}
        className="rounded-lg box-border border-[1px] border-solid border-[#EAECF0] flex flex-row justify-center items-center px-8 py-6 gap-2 bg-gray-200 lg:w-4/5 w-full"
      >
        <a href={address} target="_blank" rel="noreferrer" className="pointer">
          <h2 className="flex text-center text-lg font-sans font-[500] text-[#101828] items-center">{title}</h2>
        </a>
      </button>
    </div>
  );
}

export default Button;
