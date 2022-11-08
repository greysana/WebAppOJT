import * as React from 'react';
import styled from 'styled-components';
import { CgSoftwareUpload } from 'react-icons/cg';

export default function UploadButtons() {
  return (
    <Con>
        <input id="upload" hidden type="file"/>
        <label for ="upload" class="btn btn-primary" tabindex="0">
        Upload<CgSoftwareUpload className="icon"/>
        </label>
   
    </Con>
  );
}
const Con = styled.div`
  padding:23px;

  .icon{
    margin-top:100px;
    height:30px;
    width: 30px;
  }

`
