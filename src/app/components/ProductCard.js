const ProductCard = ({ img, title, desc, rating, price }) => {
  return (
    <div className='px-4 border border-gray-300 rounded-xl max-w-[400px]'>
      <img
        className="w-full h-auto"
        src={img}
        width={200}
        height={300}
        alt={title}
      />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>Rating: {rating}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;