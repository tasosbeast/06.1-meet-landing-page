function GridBox({ imageSrc, altText }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <img src={imageSrc} alt={altText} />
    </div>
  );
}

export default GridBox;
