class User {
  SaveAppToken(data) {
    localStorage.setItem("appToken", data);
  }

  SaveUserToken(data) {
    localStorage.setItem("userToken", data);
  }

  SaveRole(data) {
    localStorage.setItem("role", data);
  }

  Logout() {
    localStorage.clear();
  }
}
export default new User();
