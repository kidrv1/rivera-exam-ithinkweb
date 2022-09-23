import React, { useState } from "react";

const CreateUser = props => {
  const initialData = { id: null, first_name: "", last_name: "", email: "" };
  const [user, setUser] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.first_name || !user.last_name) return;
        props.createUser(user);
      }}
    >
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={onInputChange}
          pattern="[A-Za-z]{3,}"
          title="Name must have no numbers or special characters and at least 3 or more characters."
        required/>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={onInputChange}
          pattern="[A-Za-z]{3,}"
          title="Name must have no numbers or special characters and at least 3 or more characters."
          required/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={onInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="The email must be a valid email address."
          required/>
      </div>
      <div className="form-group form-group--actions">
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
        <button className="primary-btn">Create</button>
      </div>
    </form>
  );
};

export default CreateUser;
