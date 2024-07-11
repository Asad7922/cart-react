import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cardSlice";

function CartPage() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="container mx-auto py-5">
          <div className="flex flex-col lg:flex-row justify-center my-4">
            <div className="lg:w-2/3 p-4 bg-white rounded-lg shadow-md">
              <div className="border-b py-3">
                <h5 className="text-2xl font-bold">
                  Cart - {cart.length} items
                </h5>
              </div>
              <div className="py-4">
                {cart.map((data) => (
                  <div key={data.id} className="flex flex-col lg:flex-row mb-4">
                    <div className="lg:w-1/3 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="lg:w-1/3 p-4">
                      <h3 className="text-lg font-semibold">
                        Product = {data.title}
                      </h3>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                      >
                        <i className="fas fa-trash text-red-600"></i>
                      </button>
                    </div>
                    <div className="lg:w-1/3 p-4 flex flex-col justify-between">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center space-x-2">
                          <button
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
                            onClick={() =>
                              dispatch(decreaseItemQuantity(data.id))
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="w-16 p-2 border rounded-md text-center form-control"
                            value={data.quantity}
                          />
                          <button
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
                            onClick={() =>
                              dispatch(increaseItemQuantity(data.id))
                            }
                          >
                            +
                          </button>
                          <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => dispatch(removeItem(data.id))}
                    >
                      Remove
                    </button>
                        </div>
                      </div>
                      <p className="text-lg font-semibold">
                        Price = ${data.price}
                      </p>
                    </div>
                   
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 p-4 mt-4 lg:mt-0 lg:ml-4 bg-white rounded-lg shadow-md">
              <div className="border-b py-3">
                <h5 className="text-2xl font-bold">Summary</h5>
              </div>
              <div className="py-4">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <p>Total Quantity</p>
                    <span>{totalQuantity}</span>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-bold">Total amount</p>
                    <p className="font-bold">${totalPrice}</p>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
