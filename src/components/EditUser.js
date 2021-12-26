import { useEffect, useState } from "react";

const EditUser = ({ setEditing, currentUser, updateUser }) => {
  const [user, setUser] = useState(currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(
    () => {
      setUser(currentUser);
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="col-md-4">
      <h2 className="mb-4 text-decoration-underline">Edit users</h2>
      <form onSubmit={() => /*e.preventDefault(),*/ updateUser(user.id, user)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PhoneNumber</label>
          <input
            type="number"
            name="phoneNumber"
            className="form-control"
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save change
        </button>
        <button
          type="submit"
          className="btn btn-secondary mx-2"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
