import React from 'react'


function Backend() {


  return (
    <>
     <div className="skills_content">
        <h3 className="skills_title">Backend developer</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Node Js</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Express</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Mongodb</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">MySQL</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>

                {/* <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name"></h3>
                        <span className="skills_level"></span>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Backend;