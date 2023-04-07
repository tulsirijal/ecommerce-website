import React, { useEffect, useState } from "react";
import Product from "./Product";
import { getItems } from "../redux/slice/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../redux/slice/store";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();
  const { isLoading, cartItems } = useSelector((state) => state.cart);

  // async funtion call directly here
  async function fetchData() {
    setLoading(true);
    try {
      const resoponse = await fetch(API_URL);
      const data = await resoponse.json();
      console.log(data);
      setPosts(data);
    } catch (error) {}
    setLoading(false);
  }

  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <div className="mx-auto min-h-[80vh] max-w-[72rem]">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="  grid md:grid-cols-3 lg:grid-cols-4   place-items-center">
          {cartItems.map((post) => {
            return <Product key={post.id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
}
