import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerMobile from "../Drawer";
import { NavLink } from "react-router-dom";
import UserService from "../../services/service/UserService";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.GetProfile();
        setData(response.data.data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50flex bg-blue-black shadow-md">
        <div className="flex items-center justify-between w-full px-3 bg-deep-blue">
          <h1 className="m-2 font-bold tracking-widest text-black">
            Selamat Datang,{" "}
            {loading
              ? "Loading..."
              : data
              ? data.name
              : "Error: Data not found"}
          </h1>
          <div className="hidden md:block">
            <NavLink to={"/profile"}>
              <div className="border-2 border-black h-8 w-8 rounded-full">
              <img
                className="h-full w-full object-contain rounded-full"
                src={
                  data ? data.imageProfile : "-"
                }
                alt="-"
              />
              </div>
            </NavLink>
          </div>
          <button
            onClick={openDrawer}
            className="lg:hidden m-2 bg-gray-200 hover:bg-white active:bg-white transition-all ease-linear duration-150 h-8 rounded-lg flex items-center justify-center gap-2 px-3"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
      <DrawerMobile open={open} closeDrawer={closeDrawer} />
    </>
  );
};

export default NavbarComponent;
