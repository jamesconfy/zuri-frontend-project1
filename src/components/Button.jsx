// import { Link } from "react-router-dom";

function Button({ title, address }) {
  return (
    <div>
      <a href={address} target="_blank" rel="noreferrer">
        <button>
          <h2>{title}</h2>
        </button>
      </a>
    </div>
  );
}

export default Button;
