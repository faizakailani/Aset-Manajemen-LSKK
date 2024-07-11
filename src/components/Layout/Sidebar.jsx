import { useState } from "react";
import {
  Button,
  Card,
  List,
  ListItem,
  Dialog,
  DialogBody,
  DialogFooter,
  ListItemPrefix,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { RiDashboardFill, RiLogoutBoxRFill } from "react-icons/ri";
import { IoIosBookmarks } from "react-icons/io";
import User from "../../localStorages/User";
import manasik from "../../assets/manasik.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const itemSidebar = [
    {
      name: "Beranda",
      icon: RiDashboardFill,
      path: "/dashboard",
    },
    {
      name: "Data Jemaah",
      icon: IoIosBookmarks,
      path: "/jemaah",
    },
  ];

  const handleOpen = () => setOpen(!open);
  const handleLogout = () => {
    User.Logout();
    setInterval(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <Card className="bg-deep-blue rounded-none hidden lg:flex flex-col justify-between w-64 p-2 border shadow-xl">
        <div className="overflow-y-auto overflow-x-hidden">
          <div className="flex mt-3 mb-5">
            <div className="flex">
              <img src={manasik} alt="manasik" className="w-10" />
            </div>
            <div className="text-md font-bold tracking-wider leading-10">
              Manasik Tracking
            </div>
          </div>
          <List className="text-sm">
            {itemSidebar.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="sidebar rounded-lg text-light-grey"
              >
                <ListItem className="hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200">
                  <ListItemPrefix>
                    <item.icon />
                  </ListItemPrefix>
                  <span className="font-bold text-sm">{item.name}</span>
                </ListItem>
              </NavLink>
            ))}
          </List>
          <hr />
          <List>
            <button onClick={handleOpen} className="text-light-grey">
              <ListItem className="hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200">
                <ListItemPrefix>
                  <RiLogoutBoxRFill />
                </ListItemPrefix>
                <span className="font-bold text-sm tracking-wider ">
                  Logout
                </span>
              </ListItem>
            </button>
          </List>
          <hr />
        </div>
      </Card>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className="relative flex flex-col justify-center items-center gap-2">
          <div className="absolute top-10 left-10 bg-yellow-500 blur-3xl p-9 rounded-full"></div>
          <h1 className="text-xl lg:text-2xl font-bold text-main">
            Peringatan!
          </h1>
          {/* <img src="{warning}" className="w-32 lg:w-52" alt="warning logo" /> */}
          <p className="font-bold text-main text-lg">
            Apakah yakin ingin keluar?
          </p>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Batal</span>
          </Button>
          <Button onClick={handleLogout}>
            Oke
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Sidebar;
