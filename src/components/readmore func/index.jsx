import { useEffect, useState } from "react";
import ProductTile from "./ProductTile";

function ReadmoreFunction() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);

  console.log(limit);
  console.log(skip);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,images`,
        {
          method: "GET",
          "Content-type": "application/json",
        }
      );
      const result = await response.json();
      if (!response.ok) throw result;
      const newProductList = [...productList, ...result.products];
      setProductList(newProductList);
      setSkip(newProductList.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" w-[1400px] mx-auto px-20 py-4">
      <div className=" grid grid-cols-4 gap-6">
        {loading ? (
          <div>Loading...</div>
        ) : productList && productList.length > 0 ? (
          productList.map((item) => {
            return <ProductTile productDetails={item} key={item._id} />;
          })
        ) : (
          <div>No Products</div>
        )}
      </div>
      <div className="flex justify-center py-6">
        {productList && productList.length > 0 ? (
          <button
            onClick={() => fetchData()}
            className="px-4 py-1 rounded-full bg-gray-600"
          >
            Readmore
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ReadmoreFunction;
