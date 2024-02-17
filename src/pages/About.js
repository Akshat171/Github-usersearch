import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        id="image"
        sx={(theme) => ({
          mt: { xs: 8, sm: 10 },
          alignSelf: "center",
          height: { xs: 200, sm: 700 },
          width: "100%",

          backgroundSize: "cover",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            pb: { xs: 8, sm: 12 },
          }}
        >
          <SEO
            title="About"
            name="About Page"
            description="About page for Github Profile App."
            type="Info Page"
          />

          <Typography Typography variant="h3">
            About Page
          </Typography>
          <Typography style={{ padding: "10px" }}>
            SearchGitHubUsers is a simple yet powerful site to look up
            information on GitHub users. Just enter a username and access key
            details like profile details, repositories, gists, followers and
            more. It's the easiest way to learn about any GitHub developer or
            explore their open source work.
          </Typography>

          <div className="link">
            <Link to="/">
              <button>Back Home</button>
            </Link>
          </div>
          <img src="../bg.png" alt="github" />
          <p>credit: www.github.com/Akshat171</p>
        </Container>
      </Box>
    </>
  );
};

export default About;
