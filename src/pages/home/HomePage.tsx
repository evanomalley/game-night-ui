import { FunctionComponent, useEffect, useState } from "react";
import { useAxiosPrivate } from "../../hooks/UseAxiosPrivate";
import { ENDPOINTS } from "../../api/enpoints.json";
import { Outlet, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useLogOut } from "../../hooks/useLogout";
import HomeSideBar from "./SideBar/HomeSideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavHeader } from "../../components";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  overflow: auto;
  justify-content: center;
  align-content: center;
  color: white;
`;

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1 1 auto;
`;

export const HomePage: FunctionComponent = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const logout = useLogOut();
  const controllerT = new AbortController();

  const [showSideBar, setShowSideBar] = useState(true);
  const [games, setGames] = useState([]);

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  const reGetGames = async () => {
    try {
      const response = await axiosPrivate.get(ENDPOINTS.GAMES_URL, {
        signal: controllerT.signal,
      });
      setGames(response.data);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  // const addAGame =async () => {
  //     const newGame = {
  //         "name": "Pandemic",
  //         "description": "THE PLAGUE",
  //         "playTime": "45min",
  //         "minPlayers": "2",
  //         "maxPlayers": "4"
  //     }
  //     try {
  //         const response = await axiosPrivate.post(ENDPOINTS.GAMES_URL, JSON.stringify(newGame), {
  //             signal: controllerT.signal
  //         });
  //         console.log(response.data);
  //     } catch (err) {
  //         const error = err as AxiosError;
  //         if(error.isAxiosError){
  //             console.error(err);
  //            // navigate('/')
  //         }
  //     }
  // }

  useEffect(() => {
    //  let isMounted = true;
    const controller = new AbortController();

    const getGames = async () => {
      try {
        const response = await axiosPrivate.get(ENDPOINTS.GAMES_URL, {
          signal: controller.signal,
        });
        setGames(response.data);
      } catch (err) {
        const error = err as AxiosError;
        if (error.isAxiosError) {
          console.error(err);
          navigate("/");
        }
      }
    };

    getGames();

    return () => {
      //    isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate, navigate]);

  return (
    <Layout>
      <NavHeader>
        <GiHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} />
      </NavHeader>
      <Row>
        <HomeSideBar hidden={!showSideBar}>
          <div>
            <button onClick={() => signOut()}>logout</button>
          </div>
        </HomeSideBar>
        <Main>
          <Outlet />
        </Main>
      </Row>
    </Layout>
  );
};
