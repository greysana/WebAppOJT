import React from "react";
import styled from "styled-components";
import Posts from "./mainCon/Posts";
import PostUpload from "./mainCon/PostUpload";

const MainCon = () => {
  return (
    <Con>
      <PostUpload/>
      <Posts />
    </Con>
  );
};
const Con = styled.div`
  background-color: aliceblue;
  height: 100vh;
`;
export default MainCon;
