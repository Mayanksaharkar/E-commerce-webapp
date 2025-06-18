import { Link } from "react-router-dom";

type ProductInOrder = {
  product_id: string;
  qty: number;
  _id: string;
  title?: string;
  price?: number;
  cover_img?: string;
};

type Order = {
  _id: string;
  products: ProductInOrder[];
  customer_id: string;
  address: string;
  payment_status?: string;
  delivery_status: string;
  transaction_id: string;
  total_price: number;
  delivery_date: string;
  created_at: string;
  shipping_cost?: number;
};

function OrderCard({ order }: { order: Order }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
      {/* Header */}
      <div className="bg-gray-300 text-white px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-black">Order #{order._id.slice(-8)}</h3>
          </div>
          <p className="text-gray-900 text-sm font-medium">
            {new Date(order.created_at).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
            ${order.payment_status === "Paid"
              ? "bg-green-600 text-black"
              : "bg-yellow-600 text-white"}`}>
            <div className={`w-2 h-2 rounded-full ${order.payment_status === "Paid" ? "bg-green-300" : "bg-yellow-300"}`}></div>
            {order.payment_status}
          </span>
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
            ${order.delivery_status === "Delivered" ? "bg-green-600 text-white" :
              order.delivery_status === "Shipped" ? "bg-blue-600 text-white" : "bg-gray-600 text-white"}`}>
            <div className={`w-2 h-2 rounded-full 
              ${order.delivery_status === "Delivered" ? "bg-green-300" :
                order.delivery_status === "Shipped" ? "bg-blue-300" : "bg-gray-300"}`}></div>
            {order.delivery_status}
          </span>
        </div>
      </div>

      {/* Products */}
      <div className="divide-y divide-gray-100">
        {order.products.map((product, index) => (
          <div key={product._id} className="flex flex-col sm:flex-row gap-4 p-4">
            {/* Image */}
            <div className="relative w-full sm:w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              {product.cover_img ? (
                <img
                  src={product.cover_img}
                  alt={product.title}
                  className="h-full object-contain mix-blend-multiply p-1"
                />
              ) : (
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {index + 1}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-2">
              <Link to={`/product/${product.product_id}`} className="block font-medium text-gray-800 hover:text-blue-600 hover:underline">
                {product.title || "Product Name"}
              </Link>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                {/* Qty */}
                <div className="bg-gray-50 rounded-lg p-2 border flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM17 4a1 1 0 10-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Qty</p>
                    <p className="font-medium text-gray-800">{product.qty}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-gray-50 rounded-lg p-2 border flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-medium text-gray-800">₹{product.price?.toLocaleString() || 0}</p>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-gray-50 rounded-lg p-2 border flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="font-medium text-gray-800">₹{((product.price || 0) * product.qty).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Shipping */}
        <div className="bg-white rounded-lg p-4 border space-y-2">
          <h4 className="font-medium text-gray-800 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
            </svg>
            Shipping
          </h4>
          <div>
            <p className="text-sm text-gray-600">Address</p>
            <p className="text-sm text-gray-800">{order.address}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Expected Delivery</p>
            <p className="text-sm font-medium text-gray-800">{new Date(order.delivery_date).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-lg p-4 border space-y-2">
          <h4 className="font-medium text-gray-800 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Payment
          </h4>
          <div>
            <p className="text-sm text-gray-600">Transaction ID</p>
            <p className="text-xs font-mono bg-gray-100 px-2 py-1 rounded break-all text-gray-700">
              {order.transaction_id}
            </p>
          </div>
          
          {/* Add subtotal, shipping cost and total */}
          <div className="space-y-1 pt-2 border-t">
            {/* Subtotal */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-800">₹{(order.total_price - (order.shipping_cost || 0)).toLocaleString()}</span>
            </div>
            
            {/* Shipping cost */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-gray-800">₹{(order.shipping_cost || 0).toLocaleString()}</span>
            </div>
            
            {/* Divider */}
            <div className="border-t border-dashed my-1"></div>
            
            {/* Total with both values */}
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Total</span>
              <span className="text-lg font-bold text-gray-800">₹{order.total_price.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
