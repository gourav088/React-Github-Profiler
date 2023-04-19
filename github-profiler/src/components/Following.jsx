import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile.css"; 

function Following() {
  const { gitcheck } = useParams();

  const [following, setFollowing] = useState([]);
  useEffect(() => {
    if (!gitcheck) return;

    fetch(`https://api.github.com/users/${gitcheck}/following`)
      .then((data) => data.json())
      .then((data) => {
        setFollowing(data);
      });
  }, [gitcheck]);

  return (
    <div>
      <h2 className="heading">Following</h2>
      <div className="follwing-container">
        {following.map((item, index) => {
          return (
            <div key={index} className="following-item">
              <img className="avatar" src={item.avatar_url} alt="" />
              <p className="login">{item.login}</p>
              <Link to={`/profiles/${item.login}`} className="view-link">
                View Profile
              </Link>
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

export default Following;
