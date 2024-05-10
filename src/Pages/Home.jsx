import { useEffect, useState } from "react";
import ViewData from "./ViewData";

const Home = () => {
  //travelsData and message initialization with null value
  const [travelsData, setTravelsData] = useState(null);
  const [message, setMessage] = useState(null);
  // console.log(travelsData);
  useEffect(() => {
    //fetching data from info.json file
    fetch("../../public/data/info.json")
      .then((res) => res.json())
      .then((data) => {
        //data is in object form
        // console.log(data.flightOffer);
        setTravelsData(data.flightOffer); //Accessing flightOffer from fetched data and put it in travelsData
        setMessage(data.message); //set the message of data in message
      });
  }, []);
  return (
    <>
      {/* showing message  */}
      <h2>{message}</h2>

      {/* table draw with travelsData  */}
      <table className="w-full table-auto">
        {/* header section */}
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
          {/* travelsData is an array of objects and map it to access every object of that array  */}
          {travelsData?.map((travel, index) => (
            // draw all the rows in ViewData page with travelsData info and passing travel as props
            <ViewData key={index} travel={travel}></ViewData>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
