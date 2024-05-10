const ViewData = ({ travel }) => {
  //destructuring travel
  const { itineraries, price, fareBasis } = travel; // fareBasis is a 2D array with one row
  const Class = travel.class; //class is a keyword that's why put it in another constant variable Class (class and Class is not same because js is case sensitive)

  //destructuring itineraries
  const { segments, duration } = itineraries[0];
  //   console.log(Class[0][1]);
  return (
    <>
      {/* segments is an array of object and use mapping to access all objects */}
      {segments.map((segment, index) => (
        // after every segment it will put border because of index === segments.length - 1 || (index + 1) % segments.length !== 1 condition
        <tr
          key={index}
          className={
            index === segments.length - 1 || (index + 1) % segments.length !== 1
              ? "uppercase text-gray-600 border-orange-500 border-r-0 border-b-0"
              : "uppercase text-gray-600 border border-orange-500 border-r-0 border-b-0"
          }
        >
          <td className="px-2 py-1 pl-10">
            {segment.carrierCode}
            {segment.aircraft}
          </td>
          <td className="px-2 py-1">{segment.flightNumber}</td>
          {/* Class is a 2D array with one row */}
          <td>{Class[0][index]}</td>
          <td className="px-2 py-1">{fareBasis[0][index]}</td>
          {/* departure and arrival are objects with two variables iataCode and at*/}
          <td className="px-2 py-1">
            {segment.departure.iataCode}
            {segment.arrival.iataCode}
          </td>
          <td className="px-2 py-1">{segment.departure.at}</td>
          <td>{segment.arrival.at}</td>
          <td className="px-2 py-1">...</td>
          <td className="px-2 py-1">{duration}</td>

          {/* flightOffer contains single price and that's why print it for 1 time with a button */}
          {index === 0 && <td className="px-2 py-2">{price}</td>}
          {index === 1 && (
            <td className="px-2">
              <button className="btn py-1 px-3 bg-blue-700 text-white rounded-lg">
                select
              </button>
            </td>
          )}
        </tr>
      ))}
    </>
  );
};

export default ViewData;
