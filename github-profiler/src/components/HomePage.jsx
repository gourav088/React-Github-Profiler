import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function HomePage() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
    setError(""); 
  };

  const onSubmitHandler = () => {
    if (!userName) {
      alert("Please enter a name first ");
    }
  };

  return (
    <>
      <div className="git-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png"
          className="logoStyle"
          alt=""
        />
        <h3>GitHub Profiler</h3>
        <div className="input-container">
          <input
            type="text"
            value={userName}
            onChange={onChangeHandler}
            placeholder="Search users..."
            className="input-field"
          />
          <br />
          <br />
          <Link to={`/profiles/${userName}`}>
            <button
              className="btn btn-success"
              type="submit"
              onClick={onSubmitHandler}
            >
              Submit
            </button>
          </Link>
          {error && <p className="error-msg">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default HomePage;

