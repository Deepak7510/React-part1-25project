function ProductTile({ productDetails }) {
  return (
    <div className=" shadow-sm rounded-xl p-1">
      <div className="w-full h-60">
        <img
          src={productDetails.images[0]}
          className=" h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="my-2">
        <div className="text-base font-medium">{productDetails.title}</div>
      </div>
    </div>
  );
}

export default ProductTile;
