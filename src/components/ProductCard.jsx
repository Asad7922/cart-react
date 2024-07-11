import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../features/cardSlice";
function ProductCard() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full max-w-sm bg-white border m-12 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-4xl"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={item.name}
                  className=" w-full h-full block"
                  src={item.img || "https://dummyimage.com/420x260"}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">${item.price}</p>
                <button
                  onClick={() => dispatch(addtocart(item))}
                  className="mt-4 flex r-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
