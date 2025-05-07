import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start min-w-[576px]">
      <div className="w-full h-[60px] bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.1)] flex-shrink-0 py-2 px-4 flex items-center justify-between">
        <div className="h-full flex items-center justify-start gap-2">
          <img src="/uniblox-logo.svg" className="h-full" />
          <div className="text-2xl">Uniblox</div>
        </div>
        <div className="flex items-center justify-center gap-4 text-xl h-full">
          <Link to={"/"}>
            <div className="text-center w-[120px] h-full cursor-pointer border-b-2 border-[rgba(0,0,0,0)] hover:border-[rgba(0,0,0,0.1)] flex items-center justify-center">
              <div>Products</div>
            </div>
          </Link>
          <Link to={"/admin"}>
            <div className="text-center w-[120px] h-full cursor-pointer border-b-2 border-[rgba(0,0,0,0)] hover:border-[rgba(0,0,0,0.1)] flex items-center justify-center">
              <div>Admin</div>
            </div>
          </Link>
          <Link to={"/cart"}>
            <FaCartShopping className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
