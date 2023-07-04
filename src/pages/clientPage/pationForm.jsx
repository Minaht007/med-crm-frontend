import { Component } from "react";
import Select from "react-select";

const INITIAL_STATE = {
  name: "",
  dateOfBirthday: "",
  phone: "",
  email: "",
  doctor: ["name", "secondName"],
};

class PationForm extends Component {
  state = { INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    fetch("https://med-crm-backend.onrender.com/doctor")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ doctor: data });
      })
      .catch((error) => {
        console.error("Error data doctor base", error);
      });
  }
  render() {
    const { doctor } = this.state;
    const { name, value } = this.state;
    console.log(doctor);
    return (
      <div>
        <Select value={doctor} onChange={this.handleChange} as="select" />

        <input type="text" placeholder="full name" name="name" value={name} />
      </div>
    );
  }
}

export default PationForm;
