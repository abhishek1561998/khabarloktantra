import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>Page not found</h1>
      <h5>404</h5>
      <Link to={"/"}>
        <button>Back to Home ⬅️</button>
      </Link>
    </div>
  );
};

export default NotFound;
