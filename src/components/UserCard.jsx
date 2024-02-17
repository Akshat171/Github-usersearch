import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { lightBlue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const UserCard = ({ user, id }) => {
  const color = lightBlue[800];

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: { sm: 270, xs: 160, md: 180 },
        bgcolor: color,
        borderRadius: "10px",
      }}
      key={id}
    >
      <ListItem
        alignItems="flex-start"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ListItemAvatar>
          <Avatar alt={user.login} src={user.avatar_url} />
        </ListItemAvatar>
        <ListItemText>
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="white"
          >
            {user.login}
          </Typography>
        </ListItemText>
        <Link to={"/about"}>
          <GitHubIcon fontSize="small" color="white" />
        </Link>
      </ListItem>
    </List>
  );
};

export default UserCard;
