
import { Link } from "react-router-dom";

// Update the types to match your actual Order model
type ProductInOrder = {
  product_id: {
    _id: string;
    title?: string;
    price?: number;
    cover_img?: string;
  };
  qty: number;
};

type Order = {
  _id: string;
  products: ProductInOrder[];
  customer_id: string;
  address: string;
  payment_status: string;
  delivery_status: string;
  transaction_id: string;
  total_price: number;
  delivery_date: string;
  delivery_address: string;
  created_at: string;
};

function OrderCard({ order }: { order: Order }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Order Header - Now with delivery status */}
      <div className="bg-secondary text-white px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="mb-2 sm:mb-0">
            <h3 className="font-bold text-lg">Order #{order._id.slice(-8)}</h3>
            <p className="text-gray-200 text-sm">{new Date(order.created_at).toLocaleString()}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-center
              ${order.payment_status === "Paid" ? "bg-green-700" : "bg-yellow-600"}`}>
              {order.payment_status}
            </span>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-center
              ${order.delivery_status === "Delivered" ? "bg-green-700" : 
                order.delivery_status === "Shipped" ? "bg-blue-700" : "bg-gray-600"}`}>
              {order.delivery_status}
            </span>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="divide-y divide-gray-100">
        {order.products.map((product) => (
          <div key={product.product_id._id} className="flex flex-col sm:flex-row p-4 hover:bg-gray-50">
            <div className="w-full sm:w-20 h-32 sm:h-20 bg-gray-100 rounded flex justify-center mb-3 sm:mb-0">
              {product.product_id.cover_img ? (
                <img
                  src={product.product_id.cover_img}
                  alt={product.product_id.title}
                  className="h-full object-contain mix-blend-multiply p-1"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="sm:ml-4 flex-grow">
              <Link to={`/product/${product.product_id._id}`} className="font-medium text-secondary hover:text-secondary-focus hover:underline text-lg sm:text-base">
                {product.product_id.title || "Product Name"}
              </Link>
              <div className="mt-2 flex flex-wrap text-sm text-gray-600">
                <div className="mr-4 mb-1 sm:mb-0 w-full sm:w-auto">
                  <span className="font-semibold">Qty:</span> {product.qty}
                </div>
                <div className="mr-4 mb-1 sm:mb-0 w-full sm:w-auto">
                  <span className="font-semibold">Price:</span> ₹{product.product_id.price?.toLocaleString() || 0}
                </div>
                <div className="w-full sm:w-auto">
                  <span className="font-semibold">Total:</span> ₹{((product.product_id.price || 0) * product.qty).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Details Section - With delivery address and date */}
      <div className="bg-gray-50 px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-sm">
            <h4 className="font-bold text-gray-700 mb-2">Shipping Info</h4>
            <p className="mb-1"><span className="font-semibold">Address:</span> {order.delivery_address}</p>
            <p><span className="font-semibold">Expected Delivery:</span> {new Date(order.delivery_date).toLocaleDateString()}</p>
          </div>
          <div className="text-sm">
            <h4 className="font-bold text-gray-700 mb-2">Payment Info</h4>
            <p className="mb-1 break-all"><span className="font-semibold">Transaction ID:</span> {order.transaction_id}</p>
            <p className="font-bold text-lg text-secondary-focus mt-2">
              Total: ₹{order.total_price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;