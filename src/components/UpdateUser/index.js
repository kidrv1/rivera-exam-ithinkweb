import React, { useState, useEffect } from "react";

const UpdateUser = props => {
  const [user, setUser] = useState(props.currentUser);

  const onInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={onInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="The email must be a valid email address."
        />
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={onInputChange}
          pattern="[A-Za-z]{3,}"
          title="Name must have no numbers or special characters and at least 3 or more characters."
        />
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
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
        <button className="primary-btn">Update</button>
      </div>
    </form>
  );
};

export default UpdateUser;
