import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SEO, Loader, GetFetch, InputUser } from "../components";
import { ProfileView } from "../pages";
import { useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState("Akshat171");
  const [message, setMessage] = useState("");

  const url = `https://api.github.com/users/${user}`;

  const { data, loading, error, fetchUsers } = GetFetch(url);

  useEffect(() => {
    fetchUsers();
  }, [user]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  return (
    <>
      <SEO
        title="Profile"
        name="Profile Page"
        description="Github profile information is displayed here using the Github API"
        type="App"
      />

      <InputUser
        onChange={(event) => setMessage(event.target.value)}
        onClick={() => setUser(message)}
      />
      <ProfileView data={data} />
      <Outlet context={data} />
    </>
  );
};

export default Profile;
