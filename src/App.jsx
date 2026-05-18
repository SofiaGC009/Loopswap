import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";

const App = () => {

  const isAuth =
    localStorage.getItem("loopswap-auth")

  return (

    <BrowserRouter>

      <Routes>

        {/* AUTH */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* APP */}
        <Route
          path="/"
          element={
            isAuth ? (
              <MainLayout>
                <Home />
              </MainLayout>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/explore"
          element={
            <MainLayout>
              <Explore />
            </MainLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />

        <Route
          path="/chat"
          element={
            <MainLayout>
              <Chat />
            </MainLayout>
          }
        />

        <Route
            path="/post/:id"
          element={
            <MainLayout>
              <PostDetail />
            </MainLayout>
          }
        />

        <Route
          path="/create"
          element={
            <MainLayout>
              <CreatePost />
            </MainLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App