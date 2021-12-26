import { FaPen, FaTrash } from "react-icons/fa";

const UserItem = ({ user, deleteUser, editRow }) => {
  const hundelDelete = (id) => {
    deleteUser(id);
  };

  return (
    <>
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.email}</td>
        <td>
          <FaTrash
            className="text-danger icon mx-2"
            onClick={() => hundelDelete(user.id)}
          />
          <FaPen
            className="text-success icon mx-2"
            onClick={() => editRow(user)}
          />
        </td>
      </tr>
    </>
  );
};

export default UserItem;
