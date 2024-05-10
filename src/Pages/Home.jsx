import { useEffect, useState } from "react";
import ViewData from "./ViewData";

const Home = () => {
  const [travelsData, setTravelsData] = useState(null);
  const [message, setMessage] = useState(null);
  const [itineraries, setItineraries] = useState(null);
  //   console.log(travelsData);
  const [segments, setSegments] = useState(null);
  const [duration, setDuration] = useState(null);
  // console.log(segments);
  useEffect(() => {
    fetch("../../public/data/info.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.flightOffer);
        const flightOffers = data.flightOffer;
        setTravelsData(flightOffers);
        setMessage(data.message);
      });
  }, []);
  return (
    <>
      <h2>{message}</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 uppercase text-gray-600 border border-orange-500 border-r-0 border-b-0">
            <th className="px-2 py-2">flight</th>
            <th className="px-2 py-2">aircraft</th>
            <th className="px-2 py-2">class</th>
            <th className="px-2 py-2">fare</th>
            <th className="px-2 py-2">route</th>
            <th className="px-2 py-2">departure</th>
            <th className="px-2 py-2">arrival</th>
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2">duration</th>
            <th className="px-2 py-2">price</th>
          </tr>
        </thead>
        <tbody>
          {travelsData?.map((travel, index) => (
            <ViewData key={index} travel={travel}></ViewData>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
