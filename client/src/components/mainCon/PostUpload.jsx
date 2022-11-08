import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPhotoVideo } from "react-icons/fa";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import kazuha from "../../assets/kazuha.jpg";
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineClose } from "react-icons/ai";
import word from "../../assets/documentLogos/word.png"
import excel from "../../assets/documentLogos/excel.png"
import pdf from "../../assets/documentLogos/pdf.png"
import ppt from "../../assets/documentLogos/ppt.png"
import { MdDelete } from "react-icons/md";

const fileTypes = ["JPG", "PNG", "GIF","pdf","docx"];
const fileLogo = [{
  type:"docx/doc/docm",
  img: word
},
{
  type:"xlsx/xsl/xlsm",
  img: excel
},{
  type:"pdf",
  img: pdf
},{
  type:"ppt/pptx/pptm",
  img: ppt
}]
const PostUpload = () => {
  const [file, setFile] = useState([]);
  const [files, setFiles] = useState([]);
  const [prevfile, setprevfile] = useState([]);
  const [prev, setprev] = useState([]);

  const [drop, setDrop] = useState(false);
  const [id, setid] = useState(0);

  //save dropped file
  const handleChange = (file) => {
    setFile(file);
    
    if (files.length <= 3) {
      setFiles([...files, file]);
    }
    setDrop(false);
  };

  console.log(files);
  console.log(prev);

  // add preview images every successful file save
  useEffect(() => {
    if (file?.type?.includes("application")) {
    
       if (prevfile.length <1) {
         setprevfile([...prevfile, file])
        }
         
       } else {
         if (files.length > 0) {
           setprev([
             ...prev,
             {
               id: id + 1,
               link: URL.createObjectURL(files[files?.length - 1]),
             },
           ]);
           setid(id + 1);
         }
       }}
  , [file]);
  //Preview Image remove
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele.id !== value;
    });
  }
  //File Remove
  function arrayFRemove(arr, value) {
    return arr.filter(function (ele,i) {
      return i !== value;
    });
  }

  return (
    <Con>
      <div
        className="dropDetect"
        onDragover={() => {
          setDrop(true);
        }}
      >
        <div
          className="uploadCon"
          onDragOver={() => {
            setDrop(true);
          }}
          onDrop={() => {
            setDrop(false);
          }}
        >
          <img
            src={kazuha}
            alt=""
            onDragOver={() => {
              setDrop(true);
            }}
          />
          {drop && (
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              onDragOver={() => {
                setDrop(true);
              }}
            />
          )}

          <TextareaAutosize
            rows={4}
            maxRows={10}
            aria-label="maximum height"
            placeholder="Post Something"
            className="textarea"
            onDragOver={() => {
              setDrop(true);
            }}
          />

          <input id="upload" hidden type="file" />
          <label for="upload" class="btn btn-primary" tabindex="0">
            <FaPhotoVideo
              className="icon"
              onDragOver={() => {
                setDrop(true);
              }}
            />
          </label>
          {prev ? (
            <div className="prevCon">
              {prev?.map((item, i) => {
                return (
                  <div className="imageWrap">
                    <button
                      onClick={() => {
                        setprev(arrayRemove(prev, item.id));
                        setFiles(arrayFRemove(files, i));
                        console.log(i);
                      }}
                    >
                      <AiOutlineClose />
                    </button>
                    <img className="prev" src={item.link} alt="" />
                  </div>
                );
              })}
              {prevfile?.map((item, i) =>{
                return (
                  <div className="fileWrap" key={i}>
                    <img
                      className="logofile"
                      src={
                        fileLogo?.find((o) =>
                          o.type.includes(item?.name.split(".").pop())
                        ).img
                      }
                      alt=""
                    />
                    <h1>{item.name}</h1>
                    <button
                      onClick={() => {
                        setprevfile(arrayRemove(prev, item.id));
                        setFiles(arrayFRemove(files, i));
                        console.log(i);
                      }}
                    >
                      <MdDelete />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
          <button className="postbtn">Post</button>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 1rem;
    // border: 0.2px solid #333;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  }
  & .uploadCon {
    position: relative;
    width: 400px;
    // height: 100px;
    border-radius: 15px;
   // margin: 2rem auto;
    margin-top: 3rem;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 1rem;
    & .postbtn{
      border: none;
      padding: 8px 20px;
      border-radius: 10px;
      background-color: #31a2ff;
      color: #fff;
      position: relative;
      margin-top: 10px;
      right: -40%;
    }
  }
  & .textarea {
    width: 250px;
    height: 100px;

    line-height: 20px;
    border: 0;
    border-bottom: 2px solid #333;
    outline: 0;
  }
  .icon {
    margin-left: 1rem;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: #ffd30d;
    }
  }
  & .dropDetect {
    position: relative;
    z-index: 20;
    top: 0;
    left: 0;
    height: auto;
    margin: auto;
    background: #fff;
    width: 400px;
  }
  & .prevCon {
    //position: relative;
    max-height: 350px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    & .imageWrap {
      width: 30%;
      margin: 10px auto;
      & button {
        border: none;
        border-radius: 50%;
        padding: 3px 5px;
        box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
        position: relative;
        top: 1rem;
        right: -45%;
      }
      & .prev {
        //  position: relative;
        width: 100%;
        border-radius: 15px;
        height: auto;
      }
    }
    & .fileWrap {
      height: 50px;
      width: 60%;
      margin: auto;
      display: inline-flex;
      box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      padding: 5px;
      & button {
        border: none;
        border-radius: 50%;
        padding: 3px 5px;
        background-color: transparent;
        font-size: 20px;
        margin-left:10px;
       
      }
      & img {
        border-radius: 0;
        box-shadow: none;
        margin: auto 1rem;
      }
      & h1 {
        font-size: 15px;
        font-weight: 600;
        margin: auto 1rem;
      }
    }
  }
`;

export default PostUpload;
