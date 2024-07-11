import { Component } from "react";
import AlertComponent from "../components/AlertComponent";
import User from "../localStorages/User";
import { GuidApp } from "../helpers/guid_application";
import { Button, Input } from "@material-tailwind/react";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      refferer: false,
      guidApp: GuidApp,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  validasi() {
    if (this.state.email === "") {
      AlertComponent.Error("Email harus diisi!");
    } else if (this.state.password === "") {
      AlertComponent.Error("Password harus diisi!");
    } else {
      this.onLogin();
    }
  }

  onLogin() {
    let data = {
      email: this.state.email,
      password: this.state.password,
      guidAplication: this.state.guidApp,
    };
    trackPromise(
      UserService.Login(data)
        .then((res) => {
          if (res.data.success) {
            User.SaveAppToken(res.data.data.appToken);
            User.SaveUserToken(res.data.data.userToken);
            this.setState({ refferer: true });
            AlertComponent.SuccessResponse(res.data.message);
          }
        })
        .catch((e) => {
          AlertComponent.Error(e.response.data.message);
        })
    );
  }

  render() {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <div className="w-1/3 flex flex-col gap-3">
          <h1 className="font-bold">Log In</h1>
          <h1 className="text-2xl font-bold mb-10">Aset Manajemen</h1>
          <Input
            label="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <Input
            label="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <Button variant="text" className="px-0 text-left w-fit mb-10">
            Lupa Password*
          </Button>
          <Button onClick={(e) => this.validasi()}>Masuk</Button>
        </div>
      </div>
    );
  }
}