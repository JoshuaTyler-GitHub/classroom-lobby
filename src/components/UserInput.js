// node_modules
import React from "react";

// components
import UserDataForm from "./UserDataForm";

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  render() {
    const { state } = this;
    const { email } = state;

    return (
      <div className="d-flex flex-column">
        <UserDataForm onEmail={(email) => this.setState({ email })}/>
        <UserComponent email={email} />
      </div>
    );
  }
}
export default UserInput;

export const UserComponent = ({
  id = "placeholderId",
  email = "placeholderEmail",
  firstName = "placeholderFirstName",
  lastName = "placeholderLastName",
  permissionGroups = "placeholderpermissionGroups",
  lastUpdated = "placeholderLastUpdated",
}) => {
  return (
    <div className="bg-dark d-flex flex-column m-2 p-2 rounded text-light w-100">
      <span className="h4">{id}</span>
      <span>{email}</span>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{permissionGroups}</span>
      <span>{lastUpdated}</span>
    </div>
  );
};