function Button({ color, children }) {
  const backgroundColors = {
    primary: "bg-cyan-600",
    secondary: "bg-purple-600",
  };
  return (
    <button
      className={`${backgroundColors[color]} px-10 py-4 rounded-4xl red-hat-display-black text-white leading-lg`}
    >
      {children}
    </button>
  );
}

export default Button;
