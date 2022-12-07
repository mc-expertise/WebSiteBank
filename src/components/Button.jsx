import styles from "../style";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-medium font-poppins rounded-lg text-primary text-[18px]
      outline-none mt-10 ${styles}`}>
      Get Started
    </button>
  );
};

export default Button;
