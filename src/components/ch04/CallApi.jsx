import { useEffect, useState } from "react";

const CallApi = () => {
  const [data, setData] = useState(null);
  console.log("Execution rendu CallApi");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>;
};

export default CallApi;
