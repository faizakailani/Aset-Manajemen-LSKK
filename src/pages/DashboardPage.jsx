import Sidebar from "../components/Layout/Sidebar";
import Navbar from "../components/Layout/Navbar";
import { faTachometerAlt, faListAlt, faHistory, faUser, faSignOutAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
  const tables = [
    { label: "Lokasi", icon: faListAlt, data: [
        { id: 1, name: "Location A", description: "Description A" },
        { id: 2, name: "Location B", description: "Description B" },
        { id: 3, name: "Location C", description: "Description C" },
      ]
    },
    { label: "Kategori", icon: faHistory, data: [
        { id: 1, name: "Category A", description: "Description A" },
        { id: 2, name: "Category B", description: "Description B" },
        { id: 3, name: "Category C", description: "Description C" },
      ]
    },
    { label: "Data Center", icon: faUser, data: [
        { id: 1, name: "Data Center A", description: "Description A" },
        { id: 2, name: "Data Center B", description: "Description B" },
        { id: 3, name: "Data Center C", description: "Description C" },
      ]
    },
    { label: "Device", icon: faTachometerAlt, data: [
        { id: 1, name: "Device A", description: "Description A" },
        { id: 2, name: "Device B", description: "Description B" },
        { id: 3, name: "Device C", description: "Description C" },
      ]
    },
  ];


  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-[3rem]">
          <h1 className="text-2xl font-bold mb-4">Hallo Word</h1>
          <div className="overflow-x-auto">
          {tables.map((table, index) => (
          <div key={index} className="mb-4">
            <h2 className="uppercase text-xs text-gray-600 mb-2 tracking-wider">
              {table.label}
            </h2>
            <table className="min-w-full bg-white border-collapse overflow-hidden border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="border p-3">#</th>
                  <th className="border p-3">Name</th>
                  <th className="border p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {table.data.map((item) => (
                  <tr key={item.id} className="text-gray-700">
                    <td className="border p-3">{item.id}</td>
                    <td className="border p-3">{item.name}</td>
                    <td className="border p-3">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
