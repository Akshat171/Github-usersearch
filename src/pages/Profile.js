import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SEO, Loader, GetFetch, InputUser } from "../components";
import { ProfileView } from "../pages";
import { useEffect } from "react";

const Profile = () => {
  //user state (By default visible : Akshat171)
  const [user, setUser] = useState("Akshat171");
  //input type state
  const [message, setMessage] = useState("");

  //api for individual user
  const url = `https://api.github.com/users/${user}`;

  //destructure all components from GetFetch
  const { data, loading, error, fetchUsers } = GetFetch(url);

  //refreshing each time when user is changed
  useEffect(() => {
    fetchUsers();
  }, [user]);

  //Loader
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  return (
    <>
      <SEO //adding SEO on each page for better search engine optimization
        title="Profile"
        name="Profile Page"
        description="Github profile information is displayed here using the Github API"
        type="App"
      />
      //Input component for input section
      <InputUser
        onChange={(event) => setMessage(event.target.value)}
        onClick={() => setUser(message)}
      />
      //Profile
      <ProfileView data={data} />
      //Outlets for components whcih will be fix
      <Outlet context={data} />
    </>
  );
};

export default Profile;
