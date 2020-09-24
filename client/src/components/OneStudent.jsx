import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class OneStudent extends Component {
    constructor(props) {
        super(props);
        this.state={
            country: this.props.student.country,
            flag: ""
        }

    }

    componentDidMount(){
        StudentsService.getFlag(this.state.country).then(res=>this.setState({flag: res.data[0].flag}))
    }
    studentDetails = (id) =>{
        this.props.history.push(`/student-details/${id}`)
    }
    render() {
        return (
            <td><div>{<img src={this.state.flag} alt="country-flag" height="30" width="40" className="rounded-circle" style={{marginRight: "20px"}}/>}{this.props.student.country}</div></td>

        );
    }
}

export default OneStudent;