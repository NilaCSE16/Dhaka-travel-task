import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar and footer will show in every page, Outlet section may change as per rout directory 
      and in this section only child of Main.jsx will be shown according to the path */}

      {/* here I take div with min-h-screen to show footer in the bottom of every page */}
      <div className="min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
