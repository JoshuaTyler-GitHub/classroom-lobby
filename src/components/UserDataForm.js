// node_modules
import React from "react";

class UserDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      email: "emailAdr@gmail.com",
      firstName: "",
      lastName: "",
      permissionGroups: "",
      lastUpdated: "",
    };
  }

  render() {
    const { props, state } = this;
    const { onEmail } = props;
    const { email } = state;
    const isEmailValid = stringSmall(email);

    return(
      <form>

        {/* email */}
        <div>
          <label>{"email"}</label>
          <input
            className={`form-control ${isEmailValid ? "is-valid" : "is-invalid"}`}
            type="email"
            value={email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
              onEmail(e.target.value);
            }}
          />
        </div>

      </form>
    )
  }

  componentDidUpdate() {
    const { state } = this;
    const { email } = state;
    console.log(email);
  }
};
export default UserDataForm;

export const stringSmall = (value) => {
  try {
    return (
      value !== null &&
      value !== undefined &&
      String(value) !== "null" &&
      String(value) !== "undefined" &&
      String(value).trim() !== ""
    );
  }
  catch { return false; }
}