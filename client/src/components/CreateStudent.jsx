import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class CreateStudent extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            firstName:"",
            lastName:"",
            emailId:"",
            image: "",
            course: "",
            country: "",
            city:""
        }
    }
    componentDidMount(){
        if(this.state.id === "_add"){
            return
        }else{
            StudentsService.getStudentById(this.state.id).then((res)=>{
                let student = res.data
                this.setState({firstName: student.firstName, lastName: student.lastName, emailId: student.emailId,  image: student.image,  country: student.country,  course: student.course, city: student.city })
            })
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleOption=(e)=>{
    
        this.setState({course : e.target.value})
    }
    handleCityOption=(e)=>{
       
        this.setState({city : e.target.value})
    }

    saveOrUpdate=(e)=>{
        e.preventDefault();
        let student = { firstName: this.state.firstName, lastName:this.state.lastName, emailId:this.state.emailId, image: this.state.image, country: this.state.country, course: this.state.course, city: this.state.city }
        
        if(this.state.id === "_add"){
            StudentsService.postStudent(student).then((res)=>{
                this.props.history.push("/students")
            })
        }else{
            StudentsService.updateStudent(student, this.state.id).then((res)=>{
                this.props.history.push("/students")
            })
        }
    }
    cancelAdd=()=>{
        this.props.history.push("/")
    }
    render() {
        let head1 = "Add Student"
        let head2 = "Update Student"
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3" >
                            <h3 className="text-center">{this.state.id === "_add" ? head1 : head2}</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group" >
                                        <label>First Name :</label>
                                        <input placeholder="First name" name="firstName" className="form-control" 
                                        value={this.state.firstName} onChange={this.handleChange}/>
                                        <label>Last Name :</label>
                                        <input placeholder="Last name" name="lastName" className="form-control" 
                                        value={this.state.lastName} onChange={this.handleChange}/>
                                         <label>Email :</label>
                                        <input placeholder="Email " name="emailId" className="form-control" 
                                        value={this.state.emailId} onChange={this.handleChange}/>
                                        <label>Image :</label>
                                        <input placeholder="Image " name="image" className="form-control" 
                                        value={this.state.image} onChange={this.handleChange}/>
                                        <label>Country :</label>
                                        <input placeholder="Country " name="country" className="form-control" 
                                        value={this.state.country} onChange={this.handleChange}/>
                                        <label>Select Your Course : </label>
                                        <div className="input-group mb-3">
                                            <select className="custom-select" id="inputGroupSelect02" onChange={this.handleOption}>
                                                <option>Choose...</option>
                                                <option value="Web Development with Java" name="course">Web Development with Java</option>
                                                <option value="Web Development with Javascript" name="course">Web Development with Javascript</option>
                                                <option value="Data Science and Machine Learning" name="course">Data Science and Machine Learning</option>
                                            </select>
                                        </div>
                                        <label>Select Your City : </label>
                                        <div className="input-group mb-3">
                                            <select className="custom-select" id="inputGroupSelect02" onChange={this.handleCityOption}>
                                                <option>Choose...</option>
                                                <option value="Amsterdam" name="course">Amsterdam</option>
                                                <option value="Barcelona" name="course">Barcelona</option>
                                                <option value="Berlin" name="course">Berlin</option>
                                                <option value="Lisbon" name="course">Lisbon</option>
                                                <option value="Madrid" name="course">Madrid</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-success" style={{marginRight: "20px"}} onClick={this.saveOrUpdate}> Save </button>
                                    <button type="button" className="btn btn-danger" onClick={this.cancelAdd}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStudent;