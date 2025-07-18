import { useEffect, useState } from "react";
import api from "../api";
import WinnerBox from "../components/WinnerBox";

const Winner = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    api.get("/users").then(res => {
      const sorted = res.data.sort((a, b) => b.totalPoints - a.totalPoints);
      setWinners(sorted.slice(0, 3));
    });
  }, []);

  return (
    <div className="fixed top-30 lg:left-50 lg:w-full ml-5 mr-5">
      <h1 className="lg:text-2xl font-bold mb-4 lg:pl-96 ">🏅 Top 3 Winners</h1>
      <div className="lg:pr-96">
      <WinnerBox winners={winners} />
      </div>
      
    </div>
  );
};

export default Winner;
