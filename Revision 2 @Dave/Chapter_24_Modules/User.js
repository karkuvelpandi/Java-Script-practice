export default class User {
  constructor(name, email) {
    this._name = name;
    this._id = email;
  }
  greeting() {
    console.log(`Hi, this is ${this._name}`);
  }
}
