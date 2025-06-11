import { useState } from "react";
import Star from "../components/star";

function GiveStarPage() {
  const [starValue, setStarvalue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {Array(10)
        .fill(null)
        .map((_, index) => {
          return (
            <Star
              hoverValue={hoverValue}
              setHoverValue={setHoverValue}
              key={index}
              starValue={starValue}
              setStarvalue={setStarvalue}
              index={index + 1}
            />
          );
        })}
    </div>
  );
}

export default GiveStarPage;
