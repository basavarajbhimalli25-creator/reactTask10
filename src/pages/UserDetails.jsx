import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setUser(null);
    setError("");

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User Not Found");
        }

        return response.json();
      })
      .then((data) => {
        if (!data.id) {
          throw new Error("User Not Found");
        }

        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="status">Loading user details...</h2>;
  }

  if (error || !user) {
    return (
      <div className="not-found">
        <h1>User Not Found</h1>

        <p>
          No user exists with ID: <strong>{id}</strong>
        </p>

        <Link to="/users" className="back-btn">
          ← Back to Users
        </Link>
      </div>
    );
  }

  return (
    <section className="details-container">
      <Link to="/users" className="back-btn">
        ← Back to Users
      </Link>

      <div className="details-card">
        <div className="profile-circle">
          {user.name.charAt(0)}
        </div>

        <h1>{user.name}</h1>

        <p className="username">
          @{user.username}
        </p>

        <div className="details-grid">
          <div className="detail-box">
            <span>ID</span>
            <strong>{user.id}</strong>
          </div>

          <div className="detail-box">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="detail-box">
            <span>Phone</span>
            <strong>{user.phone}</strong>
          </div>

          <div className="detail-box">
            <span>Website</span>
            <strong>{user.website}</strong>
          </div>

          <div className="detail-box">
            <span>City</span>
            <strong>{user.address.city}</strong>
          </div>

          <div className="detail-box">
            <span>Company</span>
            <strong>{user.company.name}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;