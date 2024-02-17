import React, { useState } from "react";
import { Link, Outlet, useLocation, useOutletContext } from "react-router-dom";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { Loader, GetFetchPages } from "../components";
import { Container, Pagination, Typography } from "@mui/material";

const Repo = () => {
  const user = useOutletContext();
  const [page, setPage] = useState(1);

  const totalNum = user.public_repos;
  const per_page = 10;

  const baseUrl = user.repos_url;

  const { data, loading, error, startIndex } = GetFetchPages(
    baseUrl,
    totalNum,
    page,
    per_page
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  const selectPageHandler = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 className="list-title">List of Repositories</h3>
      <div className="list">
        {data?.slice(startIndex, startIndex + per_page).map((repo) => {
          return (
            <article className="list-item" key={repo.id}>
              <FolderCopyIcon fontSize="large" />
              <a
                className="repo-link"
                href={repo.html_url}
                title="Click to view on Github"
              >
                <Typography variant="h6" gutterBottom>
                  {repo.name.toUpperCase()}
                </Typography>
              </a>
              <Typography variant="body2" gutterBottom>
                Description: {repo.description ? repo.description : `${null}`}
              </Typography>
            </article>
          );
        })}
      </div>
      <Outlet context={data} />
      {data && (
        <Pagination
          sx={{ pt: "10px" }}
          count={Math.floor(totalNum / 8)}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={selectPageHandler}
        />
      )}
    </Container>
  );
};

export default Repo;
