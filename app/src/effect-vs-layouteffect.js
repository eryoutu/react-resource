import { useLayoutEffect, useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // useLayoutEffect(() => {
  //   if (count === 0) {
  //     const randomNum = 10 + Math.random() * 200;

  //     const now = Date.now();

  //     while (Date.now() - now < 100) {}

  //     setCount(randomNum);
  //   }
  // }, [count]);

  useEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;

      const now = Date.now();

      while (Date.now() - now < 100) {}

      setCount(randomNum);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
};
