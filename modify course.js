import React from "react";
import "./Course.css";
function Course(props){
    return(
        <div className="course">
            {/*PROPS-> data from parent*/}
            <h3>Course:{props.courseName}</h3>
            </div>
    );
}
export default Course;