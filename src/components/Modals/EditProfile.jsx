import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import AlertComponent from "../AlertComponent";
import UserService from "../../services/service/UserService";

// eslint-disable-next-line react/prop-types
const EditProfile = ({ isOpen, onClose, data = {} }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    setImage(file);
  };

  const handleClose = () => {
    onClose();
  };

  const handleSave = async () => {
    setIsLoading(true);
    if (!image) {
      onClose();
      AlertComponent.Error("Silakan masukkan gambar");
      return;
    }

    if (name === "") {
      onClose();
      AlertComponent.Error("Silakan masukkan nama");
      return;
    }

    if (phone === "") {
      onClose();
      AlertComponent.Error("Silakan masukkan telepon");
      return;
    }

    const formData = new FormData();
    let data = {
      newName: name,
      newPhoneNumber: phone,
      newAddress: address,
    };

    formData.append("file", image);

    try {
      const response = await UserService.UpdateProfile(data);
      const response2 = await UserService.UploadImage(formData);
      setIsLoading(false);
      onClose();
      AlertComponent.SuccessResponse(
        response.data.message + " | " + response2.data.message
      );
      setInterval(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      AlertComponent.Error(error.response.data.message);
    }
  };

  useEffect(() => {
    setName(data.name);
    setPhone(data.phoneNumber);
    setAddress(data.address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          Edit Data
        </h1>
        <p className=" text-sm text-black">Ubah detail pengguna</p>
        <div className="flex flex-col gap-3">
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
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              type="text"
              id="telepon"
              name="telepon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nomor Telepon"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <BsFillTelephoneFill className="text-gray-900" />
            </span>
          </div>
          <div className="flex flex-col relative">
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Alamat"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
              <MdOutlineMailOutline className="text-gray-900" />
            </span>
          </div>
          <div className="flex flex-col relative">
            <input
              className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-lg pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 h-20 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              label="File"
              type="File"
              size="lg"
              accept="image/*"
              id="imageInput"
              onChange={handleImageSelect}
            />
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

export default EditProfile;
