import React,{Component}from "react";
import Course from "Course";
import "./Student.css";
class Student extends Component{
    constructor(props){
        super(props);
            this.state={
                name:"Pradeep",
                course:"MERN Stack",
                count=0
            };
        }
        changeCourse=()=>{
            this.setState({course:"React Development"});
        };
        increase=()=>{
            this.setState({count:this.state.count+1});
        };
        render(){
            return(
                <div clasName="student">
                    <h2>Student:{this.state.name}</h2>
                    {/*Passing state as props*/}
                    <Course courseName={this.state.course}/>
                    {/*Event buttons*/}
                    <button onClick={this.changeCourse}>
                        Change Course
                        </button>
                        </div>
            );
        }
    }
    export default Student;