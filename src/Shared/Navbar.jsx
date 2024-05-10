import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-3 px-10 bg-slate-400">
      <Link to="/" className="mx-4">
        <button className="btn text-md font-bold">Dashboard</button>
      </Link>
      <Link to="/" className="mx-4">
        <button className="btn text-md font-bold">Master Price</button>
      </Link>
      <Link to="/" className="mx-4">
        <button className="btn text-md font-bold">Custom Price</button>
      </Link>
      <Link to="/" className="mx-4">
        <button className="btn text-md font-bold">Calender</button>
      </Link>
      <Link to="/" className="mx-4">
        <button className="btn text-md font-bold">Reports</button>
      </Link>
    </div>
  );
};

export default Navbar;
