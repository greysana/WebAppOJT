import React from 'react'
import styled from 'styled-components'

const PostUpload = () => {
  return (
    <Con>
        <div className="uploadCon">
            <img src="" alt="" />
            <textarea type="text" />
            <input type="file" />
        </div>
    </Con> 
  )
}
const Con = styled.div`

  margin: auto;
  justify-content: center;
  align-items:center;

  & .uploadCon{
    width: 400px;
    height: 100px;
    border-radius: 15px;
    margin: 2rem auto;
    margin-top: 3rem;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2);
    background-color: #fff;
  }
`

export default PostUpload