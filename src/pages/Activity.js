import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Loader, GetFetchPages } from "../components";
import { Box, Container, Pagination, Typography } from "@mui/material";

const Activity = () => {
  const [page, setPage] = useState(1);

  const user = useOutletContext();

  const baseUrl = user.events_url.replace("{/privacy}", ""); //just a logic
  const totalNum = 30; //Last 30 events
  const per_page = 10;

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
        <h3 className="list-title">Last 30 events</h3>
        <div className="list">
          {data
            ?.slice(startIndex, startIndex + per_page)
            .map((activity, index) => {
              return (
                <div key={index}>
                  <div className="list-item">
                    <Typography variant="body2" gutterBottom>
                      <Typography variant="h6" gutterBottom>
                        Repo:
                      </Typography>{" "}
                      {activity.repo?.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <Typography variant="h6" gutterBottom key={activity.id}>
                        Event Type:
                      </Typography>{" "}
                      {activity.type}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <Typography variant="h6" gutterBottom>
                        Date:
                      </Typography>{" "}
                      {new Date(activity.created_at).toLocaleString()}
                    </Typography>
                  </div>
                </div>
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

export default Activity;
