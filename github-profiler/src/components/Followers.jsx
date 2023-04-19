import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile.css";

function Followers() {
  const { gitcheck } = useParams();

  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (!gitcheck) return;

    fetch(`https://api.github.com/users/${gitcheck}/followers`)
      .then((data) => data.json())
      .then((data) => {
        setFollowers(data);
      });
  }, [gitcheck]);

  return (
    <div>
      <h2 className="title">Followers</h2>
      <div className="follower-container">
        {followers.map((item, index) => {
          return (
            <div key={index} className="follower-item">
              <img className="avatar" src={item.avatar_url} alt="" />
              <p>{item.login}</p>
              <Link to={`/profiles/${item.login}`}>View Profile</Link>
            </div>
          );
        })}
      </div>

      <Link to={`/profiles/${gitcheck}`}>
        <button className="btn">Back</button>
      </Link>
    </div>
  );
}

export default Followers;
