import { FiLoader } from "react-icons/fi";
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="load-more-button">
      Load More <FiLoader/>
    </button>
  );
}

export default Button;
