import React, { useState } from 'react'
import './works.css';


function Works() {
 const [toggleState,setToggleState] = useState(0);
 const toggleTab = (index) =>{
  setToggleState(index);
 }

  return (
    <>
   <secion className="works section" id="works">
    <h2 className="section_title">My Works</h2>
    <span className="section_subtitle">Project Highlights</span>
     
     <div className="works_container container grid">
      <div className="works_content">
        <div>
          <i className='uil uil-web-grid works_icon'></i>
          <h3 className='works_title'>Personal <br />Blog</h3>
        </div>
        

        
        <span className='works_button' onClick={()=>toggleTab(1)}>View More <i className='uil uil-arrow-right works_button-icon'></i></span>
        <div className={toggleState === 1? "works_modal active-modal" : "works_modal"}>
          <div className="works_modal-content">
            <i onClick={() => toggleTab(0)} className='uil uil-times works_modal-close'></i>
            <h3 className='works_modal-title'>Personal Blog</h3>
            <p className='works_modal-description'>

            Curated a diverse portfolio of projects, 
            each a testament to my passion for crafting innovative solutions. From responsive web applications to dynamic interfaces, these highlights showcase versatility and expertise in delivering engaging user 
            experiences across a spectrum of domains.
            </p>
            <ul className="works_modal-works grid">
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    I develop the user interface
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    Attractive web page development
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    User-friendly functionalities
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    Easy to use
                  </p>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="works_content">
        <div>
          <i className='uil uil-web-grid works_icon'></i>
          <h3 className='works_title'>Ecommerce <br />Website</h3>
        </div>
        

        
        <span className='works_button' onClick={()=>toggleTab(2)}>View More <i className='uil uil-arrow-right works_button-icon'></i></span>
        <div className={toggleState === 2 ? "works_modal active-modal" : "works_modal"}>
          <div className="works_modal-content">
            <i   onClick={() => toggleTab(0)}  className='uil uil-times works_modal-close'></i>
            <h3 className='works_modal-title'>Ecommerce Website</h3>
            <p className='works_modal-description'>

            Curated a diverse portfolio of projects, 
            each a testament to my passion for crafting innovative solutions. From responsive web applications to dynamic interfaces, these highlights showcase versatility and expertise in delivering engaging user 
            experiences across a spectrum of domains.
            </p>
            <ul className="works_modal-works grid">
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    I develop the user interface
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    Attractive web page development
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    User-friendly functionalities
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    Easy to use
                  </p>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="works_content">
        <div>
          <i className='uil uil-web-grid works_icon'></i>
          <h3 className='works_title'>Himalaya<br />site</h3>
        </div>
        

        
        <span className='works_button' onClick={()=>toggleTab(3)}>View More <i className='uil uil-arrow-right works_button-icon'></i></span>
        <div className={toggleState ===  3 ? "works_modal active-modal" : "works_modal"}>
          <div className="works_modal-content">
            <i onClick={() => toggleTab(0)} className='uil uil-times works_modal-close'></i>
            <h3 className='works_modal-title'>Himalaya Site</h3>
            <p className='works_modal-description'>

            Curated a diverse portfolio of projects, 
            each a testament to my passion for crafting innovative solutions. From responsive web applications to dynamic interfaces, these highlights showcase versatility and expertise in delivering engaging user 
            experiences across a spectrum of domains.
            </p>
            <ul className="works_modal-works grid">
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    I develop the user interface
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    Attractive web page development
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    User-friendly functionalities
                  </p>
                </i>
              </li>
              <li className="works_modal-work">
                <i className="uil uil-check-circle works_modal-icon">
                  <p className="works_modal-info">
                    Easy to use
                  </p>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </div>
   
   </secion>
    </>
  )
}

export default Works;