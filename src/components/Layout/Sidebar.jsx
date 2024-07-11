import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faListAlt, faHistory, faUser, faSignOutAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const sidebarItems = [
    { href: "/dashboard", icon: faTachometerAlt, label: "Dashboard" },
    { href: "/dashboard/lokasi", icon: faListAlt, label: "Lokasi" },
    { href: "/dashboard/kategori", icon: faHistory, label: "Kategori" },
    { href: "/dashboard/data-center", icon: faUser, label: "Data Center" },
    { href: "/dashboard/device", icon: faTachometerAlt, label: "Device" },
    { href: "/dashboard/lisensi", icon: faListAlt, label: "Lisensi" },
    { href: "/dashboard/project", icon: faHistory, label: "Project" },
    { href: "/dashboard/aplikasi", icon: faUser, label: "Aplikasi" },
    { href: "/dashboard/database", icon: faTachometerAlt, label: "Database" },
    { href: "/dashboard/manajemen-akses", icon: faListAlt, label: "Manajemen Akses" },
    { href: "/dashboard/pengguna", icon: faHistory, label: "Pengguna" },
    { href: "/dashboard/lainnya", icon: faUser, label: "Lainnya" }
];

  return (
    <div className="w-64 bg-white border-r border-gray-300 p-6 flex flex-col h-screen">
      <div className="text-right mb-4">
        <button id="sideBarHideBtn">
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
      <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">Home</p>
      <nav>
        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center capitalize font-medium text-base hover:bg-gray-200 p-2 rounded transition ease-in-out duration-500"
          >
            <FontAwesomeIcon icon={item.icon} className="mr-2" />
            {item.label}
          </a>
        ))}
        <hr className="border-t border-black mb-5 mt-3" />
        <a
          onClick={() => {}}
          className="cursor-pointer mb-3 flex items-center capitalize font-medium text-base text-red-500 hover:bg-red-200 p-2 rounded transition ease-in-out duration-500"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
