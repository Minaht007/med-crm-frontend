import { Component } from "react";

class regForm extends Component() {
  state = {
    name,
    phone,
    email,
    Doctors,
  };

  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <label>Second Name</label>
          <input type="email" placeholder="Second Name" />
        </div>
        <div>
          <label>Phone</label>
          <input type="phone" placeholder="Phone" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label>Doctor</label>
          <input type="text" placeholder="Doctor" />
        </div>
      </form>
    );
  }
}

export default regForm;
