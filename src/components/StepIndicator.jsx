function StepIndicator({ number }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Vertical line */}
      <div className="w-px h-16 bg-slate-300"></div>

      {/* Circle with number */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 bg-white  text-slate-600 red-hat-display-black leading-normal">
        {number}
      </div>
    </div>
  );
}

export default StepIndicator;
