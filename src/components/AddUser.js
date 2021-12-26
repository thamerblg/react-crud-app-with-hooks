import { useState } from "react";

const AddUser = ({ users, addUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const hundelSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Math.floor(Math.random() * 100),
      name,
      username,
      phoneNumber,
      email,
    };
    !user.name || !user.username || !user.phoneNumber || !user.email
      ? console.log("error")
      : addUser(user);
    //console.log(users);
    setName("");
    setUsername("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <div className="col-md-4">
      <h2 className="mb-4 text-decoration-underline">Add users</h2>
      <form onSubmit={(e) => hundelSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PhoneNumber</label>
          <input
            type="number"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          add a new contact
        </button>
      </form>
    </div>
  );
};

export default AddUser;
