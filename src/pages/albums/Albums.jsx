import React, { useEffect, useState } from "react";
import axios from "axios";

const Albums = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/albums";
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
      <h1 className="text-center text-[40px]">Albums</h1>
      {loading && <p>Loading................................</p>}
      <div className="grid grid-cols-4 gap-15 py-9">
        {data?.map((item) => (
          <div key={item.id} className="w-[310px] px-4 py-2.5 border-2 ">
            <p>
              {item.id} . {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Albums;
