import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Loader, GetFetchPages } from "../components";
import { Avatar, Box, Container, Pagination, Typography } from "@mui/material";

const Followers = () => {
  const user = useOutletContext();

  const [page, setPage] = useState(1);

  const totalNum = user.followers;
  const per_page = 10;

  //api route for getting all the followers
  const baseUrl = user.followers_url;

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
    <Box>
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="list follow">
          {data?.slice(startIndex, startIndex + per_page).map((followers) => {
            //slice of user profile per page
            return (
              <article className="followers" key={followers.id}>
                <div>
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src={followers.avatar_url}
                      sx={{ width: 65, height: 65 }}
                    />
                  </div>
                  <Typography variant="caption" display="block" gutterBottom>
                    <a href={followers.html_url}>{followers.login}</a>
                  </Typography>
                  <Typography variant="button" display="block" gutterBottom>
                    <a
                      href={followers.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Profile
                    </a>
                  </Typography>
                </div>
              </article>
            );
          })}
        </div>
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
    </Box>
  );
};

export default Followers;
