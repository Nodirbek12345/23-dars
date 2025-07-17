import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className=" pt-[90px] px-[80px]">
      <h1 className="text-center text-[40px]">Comments</h1>
      {loading && <p>Loading................................</p>}
      <div className="grid grid-cols-4 gap-15 py-9">
        {data?.map((item) => (
          <div key={item.id} className="w-[310px] p-2.5 border-2 h-[180px]">
            <p>{item.id} . {item.email}</p>
            <p>Comment : {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comments