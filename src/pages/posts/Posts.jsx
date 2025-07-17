import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className=" pt-[90px] px-[150px]">
      <h1 className="text-center text-[40px]">Posts</h1>
      {loading && <p>Loading................................</p>}
      <div className="grid grid-cols-4 gap-20 py-9">
        {data?.map((item) => (
          <div key={item.id} className="w-[255px] p-2.5 border-2 h-[120px]">
            <p>{item.id}.{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
