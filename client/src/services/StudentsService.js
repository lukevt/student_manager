import axios from 'axios'

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students"
class StudentsService{
    getData(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    postStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudentById(id){
        if(id !== -"add"){
            return axios.get(STUDENT_API_BASE_URL + "/" + id )
        }
    }
    updateStudent(student, studentId){
        return axios.put(STUDENT_API_BASE_URL + "/" + studentId, student);
    }
    deleteStudent(studentId){
       return axios.delete(STUDENT_API_BASE_URL + "/" + studentId).then(res=>console.log(res))
        
    }
    getFlag(country){
        return axios.get(`https://restcountries.eu/rest/v2/name/${country}`);

    }
}
export default new StudentsService()