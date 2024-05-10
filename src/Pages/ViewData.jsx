const ViewData = ({ travel }) => {
  const { itineraries, price, fareBasis, seat } = travel;
  const Class = travel.class;
  const { segments, duration } = itineraries[0];
  //   console.log(Class[0][1]);
  return (
    <>
      {segments.map((segment, index) => (
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
          <td>{Class[0][index]}</td>
          <td className="px-2 py-1">{fareBasis[0][index]}</td>
          <td className="px-2 py-1">
            {segment.departure.iataCode}
            {segment.arrival.iataCode}
          </td>
          <td className="px-2 py-1">{segment.departure.at}</td>
          <td>{segment.arrival.at}</td>
          <td className="px-2 py-1">...</td>
          <td className="px-2 py-1">{duration}</td>
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
