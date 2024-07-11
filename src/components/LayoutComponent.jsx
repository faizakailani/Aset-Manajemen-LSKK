
import Sidebar from "../components/Layout/Sidebar"
import Navbar from "../components/Layout/Navbar";

const Dashboard = () => {
 
  return (
    <div>
      <Navbar />
      <div className="h-screen flex">
      <Sidebar/>
        <div className="flex-1 p-4">
          <h1>Dashboard</h1>
          <div className="flex space-x-4 mt-2 p-1">
            <div className="p-2 mr-4">
              <p>Nama Perangkat</p>
              <p>Smart Meter Lingkar</p>
            </div>
            <div className="p-2 mr-10">
              <p>Lokasi</p>
              <p>Lingkar Selatan</p>
            </div>
            <div className="p-2 ml-5">
              <p>Role </p>
              <p>User Pelanggan</p>
            </div>
          </div>

          <h1>hallo word</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;