import { Routes, Route, Link } from "react-router-dom";
import { HomeFeature, ContactsFeature, PostFeature } from "../../features";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeFeature />}></Route>
      <Route path="/contacts" element={<ContactsFeature />}></Route>
      <Route path="/post/:postId" element={<PostFeature />}></Route>
      <Route path="/dashboard"></Route>
    </Routes>
  );
};
