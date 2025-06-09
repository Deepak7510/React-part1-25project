function Star({ index, starValue, setStarvalue, hoverValue, setHoverValue }) {
  return (
    <div
      onClick={() => setStarvalue(index)}
      onMouseOver={() => setHoverValue(index)}
      onMouseLeave={() => setHoverValue(0)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill={`${
          index <= starValue || index <= hoverValue ? "yellow" : "gray"
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L14.9 8.62L22 9.24L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.24L9.1 8.62L12 2Z" />
      </svg>
    </div>
  );
}

export default Star;
