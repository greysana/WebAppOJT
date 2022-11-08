import React from 'react'
import styled from 'styled-components';
import Group2 from ".././assets/Group2.png"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Moment from 'moment';
import pdf from ".././assets/pdf.png"
import UploadButton from "./mainCon/AnUpload";




const AnnouncementCon = () => {
  const formatDate = Moment().format("MMMM D YYYY");
  
 

  return (
    
    <Con>
      <div className="anCon">
     <div className="annCon">
     Announcement!
     </div>
    <div className="listCon" >
     <ul>
    
    <li><img className="pdf" src= {pdf} />November 4 Announcement.PDF</li>
    <li><img className="pdf" src= {pdf} />Introduction to Programming.pdf</li>
    <li><img className="pdf" src= {pdf} />Obanana Info.pdf</li>
    <li><img className="pdf" src= {pdf} />OJT Time Record.pdf</li>
    
     </ul>
     < UploadButton className="Upload"/> 
    </div>
  

    
     <img className="skew"src={Group2} alt="" />
     </div>
     <div className="Date">
     <h1>{formatDate}</h1>
    </div>
     <Calendar />
     
    </Con>

  )
}

const Con = styled.div`
 .annCon{
  background-color: #6dbee3;
  height: 40px;
  border-radius:5px;
  padding-top:15px;
  color: #fff;
  position: relative;
  z-index: 10;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 }
 .anCon{
  height: 500px;
  width: 100%;
  border-radius:5px;
  
  color: black;
  margin-top: 1px;
  background-color: #ffffff;
border-radius: 15px;
box-shadow: 0px 2px 4px rgba(197, 21, 21, 0.25);
  .skew{
position: absolute;
width:150px;
height: 570px;
top:-4rem;
z-index: 2;
right: 0;
  }
 }
 .content{
  position: relative;
  z-index: 10;
 }
.listCon{
position: relative;
z-index: 9;

ul{
  li{
  margin: 15px auto;
  height: 35px;
  background-color: #EEEEEE;
  list-style-type: none;
  margin-right: 2.5rem;
  border-radius: 10px;
  padding-top: 10px;
  ;
}
}

}
.react-calendar{
  background-color:#044259 ;
  color: #fff;
  height: 300px;
  width: 400px;
}
.react-calendar__month-view__days__day{
color: #ffffff;
font-family: typeface-courier-prime;
font-weight: bold;
font-size: 15px;
}
.react-calendar__month-view__days__day--neighboringMonth{
  color: gray;
}
.react-calendar__tile--now{
color: red;
background-color: transparent;
border: 3px solid #5AC3F2;
border-radius: 100%;
margin: auto;
height: 50px;
max-width:50px;
}
.react-calendar__navigation__label__labelText{
  color: white;
  font-size: 15px;
}
.Date{
  background-color: #5AC3F2;
  color:Black;
  border-radius: 10px;
  padding: 1px;
  font-size: 12px;
  margin: 20px;
  font-family:Karla;
}
.pdf{
  height: 30px;
  position: absolute;
  left: 3.5rem;
  margin: 0 auto;
}
& .Upload{
  position: relative;
 right: 5rem;
}
`;
export default AnnouncementCon