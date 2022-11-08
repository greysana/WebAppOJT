import React from "react";
import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import kazuha from "../../assets/kazuha.jpg";

const Posts = () => {
  return (
    <Con>
      <div className="postWrapper">
        <div className="header">
          <div className="profile">
            <img src={kazuha} alt="" />
            <span>

            <h1>Hanna Grace Abad</h1>
            <h3>2hrs ago</h3>
            </span>
          </div>
          <BiDotsHorizontalRounded />
        </div>
        <div className="body">
          <div className="caption">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            nesciunt,
          </div>
          <div className="images"></div>
          <div className="likeNComments">
            <span>
              like <h1>10</h1>
            </span>
            <span>
              comment <h1>10</h1>
            </span>
          </div>
        </div>
        <div className="commentsection"></div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  & .postWrapper {
    position: relative;
    width: 400px;
    // height: 100px;
    border-radius: 15px;
    margin: 2rem auto;
    margin-top: 3rem;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .header {
      height: 50px;
      margin: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      & .profile {
        width: 50%;
        background-color: #5ac3f2;
        position: relative;
        left: -1.1rem;
        display: inline-flex;
        border: 0.3px solid #eeeeee;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        border-radius: 0px 10px 10px 0px;
        & img {
          width: 35px;
          height: 35px;
          background-color: grey;
          border-radius: 50%;
          margin: auto 1rem;
        }
        & span {
          margin: auto 0.1rem;

          & h1 {
            font-size: 13px;
          }
          & h3 {
            position: relative;
            top: -10px;
            left: 1.5rem;
            font-size: 10px;
            color: #2b2b2b;
          }
        }
      }
    }
  }
`;
export default Posts;
