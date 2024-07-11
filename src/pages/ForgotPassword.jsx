import { Button, Input } from "@material-tailwind/react";
import React, { Component } from "react";

export default class ForgotPassword extends Component {
  render() {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <div className="w-1/3 flex flex-col gap-3">
          <h1 className="font-bold">Lupa Password</h1>
          <h1 className="text-2xl font-bold mb-10">Aset Manajemen</h1>
          <Input label="Email" required />
          <Button>Masuk</Button>
          <Button variant="text">Kembali</Button>
        </div>
      </div>
    );
  }
}
