import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Loader, GetFetchPages } from "../components";
import { Avatar, Box, Container, Pagination, Typography } from "@mui/material";

const Following = () => {
  const user = useOutletContext();

  const [page, setPage] = useState(1);

  const totalNum = user.following;
  const per_page = 10;

  const baseUrl = user.following_url.replace("{/other_user}", "");

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
          {data?.slice(startIndex, startIndex + per_page).map((following) => {
            return (
              <article className="followers" key={following.id}>
                <div>
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src={following.avatar_url}
                      sx={{ width: 65, height: 65 }}
                    />
                  </div>
                  <Typography variant="overline" display="block" gutterBottom>
                    <a href={following.html_url}>{following.login}</a>
                  </Typography>
                  <Typography variant="button" display="block" gutterBottom>
                    <a
                      href={following.html_url}
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

export default Following;
