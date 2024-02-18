import React, { useEffect, useState } from "react";
import { GetFetch, SEO } from "../components";

import { Box, Button, Container, Typography, alpha } from "@mui/material";
import UserCard from "../components/UserCard";

import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

//Start of Main Home page
const Home = () => {
  //state for getting the current page
  const [page, setPage] = useState(1);

  //github api
  const url = `https://api.github.com/users`;

  //fetching the data from GetFetch component by providing the URL of api
  const { data, fetchUsers } = GetFetch(url);
  // console.log(data);

  //fetching aal users one user refresh the page
  useEffect(() => {
    fetchUsers();
  }, []);

  //setting the page in pagination on which clicked event happen
  const selectPageHandler = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <SEO
        title="Home"
        name="Home Page"
        description="Home page for Github Profile App."
        type="article"
      />

      <article className="home-text">
        <div className="home-title-container">
          <Typography
            component="h1"
            variant="h2"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              fontSize: { xs: "30px", md: "60px" },
              alignSelf: "center",
              textAlign: "center",
              mt: { xs: "3px", sm: "5px" },
            }}
          >
            <Typography
              component="span"
              variant="h2"
              sx={{
                fontSize: { xs: "30px", md: "60px" },
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Github
            </Typography>
            Users
          </Typography>
        </div>
        <Typography>
          Find all github users
          <Link to={"/user"}>
            <Button sx={{ ml: "7px" }} variant="contained" color="primary">
              Here
            </Button>
          </Link>
        </Typography>

        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 5, sm: 7 },
            alignSelf: "center",
            height: { xs: 550, sm: 580, md: 370 },
            width: { sm: "90%", xs: "100%", md: "70%" },
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              pt: { xs: "10px", sm: "30px" },

              justifyContent: "center",
            }}
          >
            {data
              ? data
                  .slice(page * 12 - 12, page * 12) //fetching/printing only 12 profiles on each page
                  .map((user, id) => <UserCard user={user} key={id} />)
              : "Failed to get the user Please visit to profile page"}
          </Container>
        </Box>

        {data.length > 0 && ( //Pagination start
          <Pagination
            sx={{ pt: "10px" }}
            count={3}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={selectPageHandler}
          />
        )}
      </article>
    </Box>
  );
};

export default Home;
