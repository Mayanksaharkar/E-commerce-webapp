import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import url from "../../../context/url";

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
  total_price: number;
  address: string;
  payment_status: string;
  delivery_status: string;
  transaction_id: string;
  delivery_date: string;
  created_at: string;
  shipping_cost?: number;
};

function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleOrders, setVisibleOrders] = useState(3); // Initially show 3 orders
  
  const loadMore = () => {
    setVisibleOrders(prevVisible => prevVisible + 3); // Load 3 more orders
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const uid = localStorage.getItem("uid");
      if (!uid) {
        setOrders([]);
        setLoading(false);
        return;
      }
      const res = await fetch(`${url}/order/${uid}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await res.json();

      // Fetch product details for each product in each order
      const ordersWithProductDetails = await Promise.all(
        data.map(async (order: Order) => {
          const productsWithDetails = await Promise.all(
            order.products.map(async (p, idx) => {
              const prodRes = await fetch(`${url}/product/${p.product_id}`);
              const prodData = await prodRes.json();
              return {
                ...p,
                _id: p.product_id || String(idx), 
                title: prodData.title,
                price: prodData.price,
                cover_img: prodData.cover_img,
              };
            })
          );
          return { ...order, products: productsWithDetails };
        })
      );

      setOrders(ordersWithProductDetails);
      setLoading(false);
    };
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 my-8">
      <h1 className="text-3xl font-bold text-secondary mb-8 text-center">Your Order History</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="mt-4 text-gray-600 text-lg">No orders found</p>
          <button onClick={() => window.location.href = "/"} className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-focus">
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {orders.slice(0, visibleOrders).map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
          
          {/* Load More button - only show if there are more orders to load */}
          {visibleOrders < orders.length && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={loadMore}
                className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-focus transition-colors duration-300 flex items-center gap-2"
              >
                <span>Load More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default OrderHistory;