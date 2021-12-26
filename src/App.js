import { useState } from "react";
import UsersTable from "./components/UsersTable";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  const usersData = [
    {
      id: 1,
      name: "Nick",
      username: "ebb",
      phoneNumber: "01010101",
      email: "nick@gmail.com",
    },
    {
      id: 2,
      name: "Shane",
      username: "too",
      phoneNumber: "02020202",
      email: "shane@gmail.com",
    },
    {
      id: 3,
      name: "Dhawna",
      username: "root",
      phoneNumber: "03030303",
      email: "dhawna@gmail.com",
    },
    {
      id: 4,
      name: "thena",
      username: "sheenap",
      phoneNumber: "04040404",
      email: "theena@gmail.com",
    },
  ];

  // sets initial form state - "blank state"
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
  };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((item) => item.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      phoneNumber: user.phoneNumber,
      email: user.email,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((item) => (item.id === id ? updatedUser : item)));
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center text-uppercase text-decoration-underline">
        Phone Book
      </h1>
      <div className="row">
        {!editing && <AddUser users={users} addUser={addUser} />}
        {editing && (
          <EditUser
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        )}
        <UsersTable users={users} deleteUser={deleteUser} editRow={editRow} />
      </div>
    </div>
  );
}

export default App;
