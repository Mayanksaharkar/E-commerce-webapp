import DescAccordian from "./DescAccordian";
import ImageSlider from "./ImageSlider";
import SpecTable from "./SpecTable";

import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/Product/ProductContextProvider";
import { CartContext } from "../../../context/Cart/CartContext";
import { AuthContext } from "../../../context/Auth/AuthContextProvider";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";


function ProductPage() {

  const nav = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams();

  const { currProduct, getProdById } = useContext(ProductContext);

  const { add_to_cart, fetchAllItems } = useContext(CartContext);

  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    if (localStorage.getItem("uid") === null) {
      console.log(isLoggedIn);
      toast.error("Please Login First");
      nav("/signin");
    } else {
      const res = await add_to_cart(
        localStorage.getItem("uid") || "",
        currProduct._id,
        1
      );
      if (res === 200) {
        toast.success("Item has been added to Cart!");
      } else {
        toast.error("Somthing Went Wrong");
      }
      await fetchAllItems();
    }
  };

  const handleBuyNowClick = async () => {
    await handleAddToCart();
    navigate(`/cart/${localStorage.getItem("uid")}`);
  };

  useEffect(() => {
    getProdById(productId || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setTimeout(() => {
    if (currProduct) {
      setIsLoading(false);
    }
  }, 2000);

  return (
    <div className="pt-4">
      {isLoading ? (
        <ClipLoader color="#000000" />
      ) : (
        <div className="max-w-[70vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <aside className="md:flex-1 self-start lg:sticky lg:top-36 w-full">
              <div className="h-[460px] w-full rounded-lg bg-white mb-4">
                {currProduct.img_list.length > 0 ? (
                  <ImageSlider images={currProduct?.img_list} />
                ) : (
                  <img
                    src="https://grafgearboxes.com/productos/images/df.jpg"
                    className="w-full h-full rounded-lg object-contain"
                    alt=""
                  />
                )}{" "}
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full btn  bg-secondary text-base-100 hover:text-secondary py-4 px-4 rounded-xl font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      if (isLoggedIn) {
                        handleAddToCart();
                      } else {
                        navigate("/signin");
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button
                    className="w-full btn text-base-content bg-base-300 py-4 px-4 rounded-xl font-bold"
                    onClick={(e) => {
                      e.preventDefault();

                      handleBuyNowClick();
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </aside>
            <div className="md:flex-1 lg:px-4">
              <h2 className="text-lg lg:text-3xl   font-bold text-base-content mb-2  drop-shadow-xl ">
                {currProduct?.title}
              </h2>

              <div className="flex mb-4">
                {currProduct.price ? (
                  <div className="mr-4">
                    <span className="font-bold text-accent lg:text-3xl text-lg">
                      ₹ {currProduct?.price.toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
                <div>
                  <span className="font-bold text-base-content">
                    Availability: {"      "}
                  </span>
                  {currProduct.price ? (
                    <span className="text-base-content">In Stock</span>
                  ) : (
                    <span className="text-secondary text-lg">Out Of Stock</span>
                  )}
                </div>
              </div>
              {currProduct.rating && (
                <div className="px-3 py-1 bg-secondary w-min rounded text-white font-bold flex gap-1 items-center">
                  <span>{currProduct.rating} </span>
                  <span>
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      viewBox="0 0 1280.000000 1218.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,1218.000000) scale(0.100000,-0.100000)"
                        fill="#ffffff"
                        stroke="none"
                      >
                        <path
                          d="M6368 12168 c-9 -7 -46 -107 -83 -223 -37 -115 -84 -264 -105 -330
-21 -66 -89 -277 -150 -470 -61 -192 -130 -406 -152 -475 -22 -69 -70 -222
-108 -340 -64 -200 -87 -272 -192 -600 -22 -69 -70 -222 -108 -340 -38 -118
-87 -272 -109 -342 -23 -71 -59 -185 -82 -255 -22 -71 -71 -225 -109 -343 -38
-118 -87 -273 -110 -345 -23 -71 -72 -227 -110 -345 l-68 -215 -189 0 c-103 0
-1195 4 -2426 8 -1745 7 -2241 6 -2252 -3 -20 -17 -19 -54 2 -73 10 -8 455
-329 988 -712 534 -383 1412 -1014 1953 -1403 540 -388 982 -710 982 -715 0
-6 -65 -207 -144 -446 -79 -240 -275 -834 -436 -1321 -160 -487 -309 -937
-330 -1000 -409 -1229 -601 -1825 -596 -1846 7 -25 45 -41 68 -28 12 7 1342
984 3152 2314 407 299 745 543 750 543 6 0 884 -640 1951 -1423 1403 -1030
1949 -1425 1972 -1428 24 -3 34 1 43 17 12 24 20 -1 -381 1211 -121 366 -319
962 -439 1325 -120 363 -325 981 -455 1374 -197 592 -234 716 -223 726 7 7
263 193 568 412 2041 1467 3281 2360 3318 2390 46 38 52 61 23 87 -18 16 -121
17 -1782 7 -970 -6 -2061 -12 -2423 -13 l-660 -3 -248 775 c-136 426 -254 795
-262 820 -19 60 -91 285 -514 1610 -198 619 -379 1186 -403 1260 -23 74 -49
143 -57 153 -18 20 -42 22 -64 5z"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              )}

              <div className="w-full ">
                {currProduct.desc_long !== null &&
                currProduct.desc_long.length > 0 ? (
                  <>
                    <span className="font-bold text-2xl text-base-content text-right">
                      Product Description:
                    </span>
                    <DescAccordian Description={currProduct.desc_long} />
                  </>
                ) : (
                  <></>
                )}
                {currProduct.specification !== null &&
                currProduct.specification.length > 0 ? (
                  <div>
                    <span className="font-bold text-2xl text-base-content text-right">
                      Product Specifications:
                    </span>

                    <SpecTable specifications={currProduct.specification} />
                  </div>
                ) : (
                  <></>
                )}
                <p className="text-base-content text-sm mt-2"></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
