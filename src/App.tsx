import { LoginPage } from "./pages/login/LoginPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRouter";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import PersistedLogin from "./routes/PersitedLogin";
import { RootPage } from "./pages/RootPage";
import { useAuth } from "./hooks/UseAuth";
import styled from "styled-components";
import { DashBoard } from "./pages/home/Dashboard";
import { MyGamesList } from "./pages/home/myGames/MyGames";

const AppContainer = styled.div`
  height: 100%;
`;

function App() {
  const isAuth = useAuth().authData?.accessToken;

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route element={<PersistedLogin />}>
            <Route path="/" element={<RootPage />} />
            <Route
              path="/login"
              element={isAuth ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<HomePage />}>
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="mygames" element={<MyGamesList />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
