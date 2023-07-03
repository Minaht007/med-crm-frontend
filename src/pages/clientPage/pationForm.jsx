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
  state = INITIAL_STATE;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    fetch("http://localhost:3090/api/doctor")
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
    return (
      <Select>
        <input name="doctor" as="select" />
      </Select>
    );
  }
}

export default PationForm;
