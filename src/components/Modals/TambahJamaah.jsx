import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { useState } from "react";
import AlertComponent from "../AlertComponent";
import { GuidApp } from "../../helpers/guid_application";
import { GetGuidCompany } from "../../helpers/auth_header";
import JemaahService from "../../services/service/JemaahService";

// eslint-disable-next-line react/prop-types
const TambahJamaah = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleClose = () => {
    onClose();
  };

  const handleSave = async () => {
    setIsLoading(true);
    if (name === "") {
      onClose();
      AlertComponent.Error("Silakan masukkan nama");
      return;
    }
    if (email === "") {
      onClose();
      AlertComponent.Error("Silakan masukkan Email");
      return;
    }
    if (gender === "") {
      onClose();
      AlertComponent.Error("Silakan pilih jenis kelamin");
      return;
    }
    if (password === "") {
      onClose();
      AlertComponent.Error("Silakan masukan password");
      return;
    }
    if (address === "") {
      onClose();
      AlertComponent.Error("Silakan masukan alamat");
      return;
    }
    let data = {
      email: email,
      password: password,
      name: name,
      phoneNumber: phoneNumber,
      guidAplication: GuidApp,
      companyGuid: GetGuidCompany(),
      role: "user",
      gender: gender,
    };

    try {
      const response = await JemaahService.AddJemaah(data);
      setIsLoading(false);
      onClose();
      AlertComponent.SuccessResponse(response.data.message);
      setInterval(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      AlertComponent.Error(error.response.data.message);
    }
  };

  return (
    <Dialog
      open={isOpen}
      size="sm"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogBody>
        <IoIosCloseCircleOutline
          className="cursor-pointer w-7 h-7 float-end text-black"
          onClick={handleClose}
        />
        <h1 className="text-black font-bold text-xl tracking-wider mb-2">
          Tambahkan Data
        </h1>
        <p className=" text-sm text-black">
          Masukan Detail Jemaah untuk menambahkan data
        </p>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex flex-col relative">
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Lengkap"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <FaUser className="text-gray-900" />
            </span>
          </div>
          <div className="flex flex-col relative">
            <select
              className="bg-gray-50 mt-2 border-2 border-blue appearance-none text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <MdOutlineArrowDropDownCircle className="text-gray-900" />
            </span>
          </div>
          <div className="flex flex-col relative">
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              type="text"
              id="alamat"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Alamat"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <MdMyLocation className="text-gray-900" />
            </span>
          </div>
          <div className="flex flex-col relative">
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <MdOutlineMailOutline className="text-gray-900" />
            </span>
          </div>
          <div className="flex flex-col relative">
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <MdOutlinePassword className="text-gray-900" />
            </span>
          </div>
          <div className="flex flex-col relative">
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              type="text"
              id="email"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Telepon"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <MdOutlineMailOutline className="text-gray-900" />
            </span>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          className="bg-black w-full rounded-full"
          variant="gradient"
          onClick={handleSave}
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            "Simpan"
          )}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default TambahJamaah;
