import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/todos";
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
      <h1 className="text-center text-[40px]">Todos</h1>
      {loading && <p>Loading................................</p>}
      <div className="grid grid-cols-2 gap-15 py-9">
        {data?.map((item) => (
          <div key={item.id} className=" p-2.5 border-2 h-[100px]">
            <p>{item.id} . {item.title}</p>
            <p className={`${item.completed ? "text-green-700":"text-red-700"}`}>{item.completed?"Bajarildi":"Bajarilmadi"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todos