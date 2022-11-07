import React from 'react'
import styled from 'styled-components'
import AnnouncementCon from '../components/AnnouncementCon'
import MainCon from '../components/MainCon'
import ProfileCon from '../components/ProfileCon'

const Home = () => {
  return (
    <HomeCon>
   <ProfileCon className="prof"/>
   <MainCon className="main"/>
   
   <AnnouncementCon className="ann"/>
    </HomeCon>
  )
}
const HomeCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "prof main ann";
  @media (min-width:1200px){
    grid-template-columns: 1fr 3.8fr 1fr;
  }

  & .prof {
    grid-area: prof;
    background-color: blue;
    color: red;
    height: 100vh;
  }
  & .main {
    grid-area: main;
    background-color: aliceblue;
  }
  & .ann {
    grid-area: ann;
    background-color: aquamarine;
  }
`;

export default Home;