import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';
import OneStudent from './OneStudent';
import {FaUserEdit} from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            students:[],

        }

    }
    componentDidMount(){
        StudentsService.getData().then((res)=>this.setState({students:res.data}));
        
    }
    addStudent = ()=>{
        this.props.history.push("/add-student/_add")
    }

    updateStudent = (id) =>{
        this.props.history.push(`/add-student/${id}`)
    }

    deleteStudent = (id) =>{
        console.log(id)
        StudentsService.deleteStudent(id).then((res)=>{
            this.setState({students:this.state.students.filter(student=> student.id !== id)})
        })
        
    }


    studentDetails = (id) =>{
        this.props.history.push(`/student-details/${id}`)
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className="row" style={{marginBottom:15}}>
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student's ID</th>
                                <th>Student's First Name</th>
                                <th>Student's Last Name</th>
                                <th>Student's Course</th>
                                <th>Student's City</th>
                                <th>Student's Country</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                             {this.state.students.map(student=>{
                             
                                return(
                                    <tr key={student.id}>
                                        <td><img src={student.image} alt="country-flag" height="100" width="120" className="img-thumbnail" style={{marginRight: "20px"}}/></td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.course}</td>
                                        <td>{student.city}</td>
                                        <OneStudent student={student}/>
                                        <td>  
                                            <div style={{display: "flex", justifyContent: "space-around"}}>
                                                <div className="btn btn-info" onClick={()=> this.updateStudent(student.id)} style={{marginRight:"10px"}}><FaUserEdit/></div>
                                                <div className="btn btn-danger" onClick={()=> this.deleteStudent(student.id)} style={{marginRight:"10px"}}><RiDeleteBin5Line/></div>
                                                <div className="btn btn-info" onClick={()=> this.studentDetails(student.id)}>Details</div>

                                            </div>                  
                                            
                                        </td>
                                    </tr>
                                )
                            })} 
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StudentsList;