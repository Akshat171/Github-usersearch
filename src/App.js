import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  About,
  NotFound,
  Profile,
  Repo,
  Activity,
  Following,
  Followers,
} from "./pages";
import "./index.css";
import { Navigation } from "./components";

export default function App() {
  const location = useLocation();
  const background = Location.state && Location.state.background;

  return (
    <section>
      <Navigation />
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route exact path="/user" element={<Profile />}>
          <Route exact path="/user/repo" element={<Repo />} />
          <Route exact path="/user/activity" element={<Activity />} />
          <Route exact path="/user/following" element={<Following />} />
          <Route exact path="/user/followers" element={<Followers />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
