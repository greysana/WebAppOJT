import React from "react";
import styled from "styled-components";

const PostUpload = () => {
  return (
    <Con>
      <div className="uploadCon">
        <img src="" alt="" />

        <textarea
          className="textarea"
          name="tweet"
          id="textbox"
          placeholder="What's happening?"
          maxLength="100"
        ></textarea>
        <input id="upload" hidden type="file" />
        <label for="upload" class="btn btn-primary" tabindex="0">
          Upload File
        </label>
      </div>
    </Con>
  );
};
const Con = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  & .uploadCon {
    width: 400px;
    height: 80px;
    border-radius: 15px;
    margin: 2rem auto;
    margin-top: 3rem;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    display: inline-flex;
    padding: 1rem;
  }
  & img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #333;
  }
  & .textarea {
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    resize: none;
    line-height: 24px;
    overflow: auto;
    height: auto;
    padding: 8px;
    box-shadow: 0px 4px 10px -8px black;
  }
`;

export default PostUpload;
