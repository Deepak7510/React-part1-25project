import { useEffect, useState } from "react";

function CustomSlider({ url, limit }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  async function fetchImageData() {
    try {
      setLoading(true);
      const response = await fetch(url + `/list?page=1&limit=${limit}`, {
        method: "GET",
        "Content-type": "Application/json",
      });
      const result = await response.json();
      if (!response.ok) throw result;
      setImage([...result]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImageData();
  }, []);

  function handlePre() {
    setCurrentImage((pre) => (pre - 1 + image.length) % image.length);
  }
  function handleNext() {
    setCurrentImage((pre) => (pre + 1) % image.length);
  }

  return (
    <div>
      <div>
        {loading ? (
          <div>Loading....</div>
        ) : image && image.length > 0 ? (
          <div className="relative h-[500px] ">
            <button
              onClick={handlePre}
              className="absolute left-5 top-[50%] z-40 translate-y-[-50%] bg-white p-2 cursor-pointer rounded-full"
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              className="absolute right-5 top-[50%] z-40 translate-y-[-50%] bg-white p-2 cursor-pointer rounded-full"
            >
              {">"}
            </button>
            <div className="flex gap-2 absolute z-50 bottom-10 left-[50%] translate-x-[-50%] ">
              {Array(image.length)
                .fill(null)
                .map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={`h-3 w-3 ${
                        currentImage === index ? "bg-gray-500" : "bg-white"
                      } rounded-full `}
                    ></div>
                  );
                })}
            </div>
            {image.map((item, index) => {
              return (
                <img
                  key={item.id}
                  src={item?.download_url}
                  className={`${
                    currentImage == index ? "opacity-100" : " opacity-0"
                  } absolute duration-300 h-full w-full object-cover`}
                  alt=""
                />
              );
            })}
          </div>
        ) : (
          <div>No Image</div>
        )}
      </div>
    </div>
  );
}

export default CustomSlider;
