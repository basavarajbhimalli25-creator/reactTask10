import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="status">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <section className="users-container">
      <div className="page-header">
        <h1>Users List</h1>
        <p>Explore our users and view their complete details.</p>
      </div>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-number">
              #{user.id}
            </div>

            <h2>{user.name}</h2>

            <p>
              <strong>Username:</strong> {user.username}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

            <p>
              <strong>City:</strong> {user.address.city}
            </p>

            <Link
              to={`/users/${user.id}`}
              className="details-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;