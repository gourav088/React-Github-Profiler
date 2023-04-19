import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile.css"; 

function Profile() {
  const { id } = useParams();

  const [profiles, setProfiles] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    } else {
      fetch(`https://api.github.com/users/${id}`)
        .then((data) => data.json())
        .then((data) => {
          setProfiles(data);
        });

      fetch(`https://api.github.com/users/${id}/repos`)
        .then((data) => data.json())
        .then((data) => {
          setRepos(data);
        });
    }
  }, [id]);

  return (
    <div>
      <div>
        <h3 className="profile-header1">Hello! {profiles.login}</h3>
        <div className="profile-head1">
          <div className="profile-info1">
            <img className="profile-img1" src={profiles.avatar_url} alt="" />
            <br />
            <span>{profiles.name}</span> <br />
            <span>{profiles.location}</span>
            <hr />
            <button className="btn-sub">
              <Link className="profile-link" to={"/"}>
                Sign out
              </Link>
            </button>
          </div>
          <div className="profile-bio1">
            <p>{profiles.bio}</p>
            <hr />
            <h5>
              <Link className="profile-link" to={`/followers/${id}`}>
                {profiles.followers}
              </Link>{" "}
              Followers
            </h5>
            <h5>
              <Link className="profile-link" to={`/following/${id}`}>
                {profiles.following}
              </Link>{" "}
              Following
            </h5>
          </div>
        </div>

        <h3 className="profile-header1">Repository List</h3>
        <div className="profile-repo1">
          {repos.map((item, index) => {
            return (
              <div key={index} className="repo-item1">
                <img
                  src="https://www.pngmart.com/files/1/Folders-PNG-File.png"
                  alt=""
                  className="repo-img1"
                />
                <hr />
                <Link
                  className="repo-link"
                  to={`/reposDetail/${id}/${item.name}`}
                >
                  <p className="repo-name1">{item.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
