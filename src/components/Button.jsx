const Button = ({ label, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 py-4 font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "text-blue-700"} rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
    </button>
  );
};

export default Button;
