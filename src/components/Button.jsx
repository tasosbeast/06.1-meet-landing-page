function Button({ color, children }) {
  const backgroundColors = {
    primary: "bg-cyan-600 hover:bg-[#71C0D4]",
    secondary: "bg-purple-600 hover:bg-[#B18BDD]",
  };
  return (
    <button
      className={`${backgroundColors[color]} px-10 py-4 rounded-4xl red-hat-display-black text-white leading-lg hover:cursor-pointer duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
}

export default Button;
