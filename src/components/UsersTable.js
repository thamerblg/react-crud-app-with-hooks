import UserItem from "./UserItem";

const UsersTable = ({ users, deleteUser, editRow }) => {
  return (
    <div className="col-md-8">
      <h2 className="mb-4 text-decoration-underline">Table of users</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase()
                  ? -1
                  : a.name.toLowerCase() > b.name.toLowerCase()
                  ? 1
                  : 0
              )
              .map((user) => (
                <UserItem
                  user={user}
                  deleteUser={deleteUser}
                  editRow={editRow}
                  key={user.id}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <p>There is no data to show</p>
      )}
    </div>
  );
};

export default UsersTable;
