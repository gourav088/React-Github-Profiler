import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile.css"; 

function RepoDetail() {
  const { ids, gitcheck } = useParams();

  const [reposDetail, setReposDetail] = useState([]);
  useEffect(() => {
    if (!ids) return;

    fetch(`https://api.github.com/repos/${ids}/${gitcheck}`)
      .then((data) => data.json())
      .then((data) => {
        setReposDetail(data);
        console.log("@gt ", data);
      });
  }, [ids, gitcheck]);

  return (
    <div>
      <h2 className="repo-header">Repository Details</h2>
      <div className="repo-container">
        <div className="repo-detail-item">
          <span>
            Repository Name
            <p className="repo-detail-value">{reposDetail.name}</p>
          </span>
          <span>
            Repository Default-Branch
            <p className="repo-detail-value">{reposDetail.default_branch}</p>
          </span>
          <span>
            Repository Id
            <p className="repo-detail-value">{reposDetail.id}</p>
          </span>
        </div>
      </div>
      <Link to={`/profiles/${ids}`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
}

export default RepoDetail;
