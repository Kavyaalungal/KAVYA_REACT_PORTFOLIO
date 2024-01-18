// import React, { useState } from 'react'
// import "./qualification.css"
// function Qualification() {
//     const [toggleState,setToggleState] = useState(0);
//     const toggleTab = (index) =>{
//      setToggleState(index);
//     }
//   return (
//     <section className="qualification section">
//         <h2 className="section_title">Qualification</h2>
//         <span className='section_subtitle'>My persnal journey</span>
//         <div className="qualification_container container">
//             <div className="qualification_tabs">
//                 <div className="qualification_button qualification_active button--flex">
//                     <i className="uil uil-graduation-cap qualification_icon"></i>Education
//                 </div>

//                 <div className="qualification_button  button--flex">
//                     <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
//                 </div>
//             </div>
//     <div className="qualification_sections">
//         <div className="qualification_content qualification_content-active">
//             <div className="qualification_data">
//                 <div>
//                     <h3 className="qualification_title">BTECH</h3>
//                     <span className="qualification_subtitle">GEC Idukki</span>
//                     <div className="qualification_calender">
//                         <i className="uil uil-calendar-alt"></i>2019 - 2023
//                     </div>
//                 </div>
//                 <div>
//                     <span className="qualification_rounder"></span>
//                     <span className="qualification_line"></span>
//                 </div>
//             </div>
//             <div className="qualification_data">
//                 <div></div>

//                 <div>
//                     <span className="qualification_rounder"></span>
//                     <span className="qualification_line"></span>
//                 </div>

//                 <div>
//                     <h3 className="qualification_title">High School</h3>
//                     <span className="qualification_subtitle">GHSS Niramaruthoor</span>
//                     <div className="qualification_calender">
//                         <i className="uil uil-calendar-alt"></i>2016 - 2018
//                     </div>
//                 </div>
               
//             </div>

//             <div className="qualification_data">
//                 <div>
//                     <h3 className="qualification_title">SSLC</h3>
//                     <span className="qualification_subtitle">Amrita Vidyalam</span>
//                     <div className="qualification_calender">
//                         <i className="uil uil-calendar-alt"></i>2015 - 2016
//                     </div>
//                 </div>
//                 <div>
//                     <span className="qualification_rounder"></span>
//                     <span className="qualification_line"></span>
//                 </div>
//             </div>

           
//         </div>

//         <div className="qualification_content qualification_content-active">
//             <div className="qualification_data">
//                 <div>
//                     <h3 className="qualification_title">MERN STACK </h3>
//                     <span className="qualification_subtitle">Synnefo Solutions</span>
//                     <div className="qualification_calender">
//                         <i className="uil uil-calendar-alt"></i>6 Months
//                     </div>
//                 </div>
//                 <div>
//                     <span className="qualification_rounder"></span>
//                     <span className="qualification_line"></span>
//                 </div>
//             </div>
          
           
//         </div>
//     </div>

//         </div>
//     </section>
//   )
// }

// export default Qualification;
import React from 'react'
import './qualification.css';
import Education from './Education';
import Experience from './Experience.jsx';

function Qualification() {


  return (
    <>
    <section className="skills section" id="skills">
        <h2 className="section_title">Qualifications</h2>
        <span className="section_subtitle">My personal Journey</span>

        <div className="skills_container container grid">
          <Education/>
            <Experience/>
        </div>
    </section>
    </>
  )
}

export default Qualification;