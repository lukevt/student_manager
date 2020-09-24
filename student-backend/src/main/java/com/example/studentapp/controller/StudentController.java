package com.example.studentapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentapp.exception.ResouceNotFoundException;
import com.example.studentapp.model.Student;
import com.example.studentapp.repository.StudentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping ("/api/v1/")
public class StudentController {
	
	@Autowired
	private StudentRepository<?> studentRepository;
	
	//get all students
	@GetMapping("/students")
 public List<Student> getAllStudents(){
	 return studentRepository.findAll();
 }
	
	//create student rest api
	@PostMapping("/students")
	public Student createStudents(@RequestBody Student student) {
		return studentRepository.save(student);
	}
	
	//get Student by id rest api
	@GetMapping("/students/{id}")
	public ResponseEntity <Student> getStudentById(@PathVariable Long id) {
		Student student =  studentRepository.findById(id)
				.orElseThrow(()-> new ResouceNotFoundException("No student with this id found: " + id));
		return ResponseEntity.ok(student);
	};
	
	// update student rest api
	@PutMapping("students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails){
		Student student =  studentRepository.findById(id)
				.orElseThrow(()-> new ResouceNotFoundException("No student with this id found: " + id));
		student.setFirstName(studentDetails.getFirstName());
		student.setLastName(studentDetails.getLastName());
		student.setEmailId(studentDetails.getEmailId());
		student.setImage(studentDetails.getImage());
		student.setCourse(studentDetails.getCourse());
		student.setCountry(studentDetails.getCountry());
		student.setCity(studentDetails.getCity());

		Student updateStudent  = studentRepository.save(student);
		return ResponseEntity.ok(updateStudent);
		
	}
	
	//delete student rest api
	@DeleteMapping("/students/{id}")
	public ResponseEntity <Map<String, Boolean>> deleteStudent(@PathVariable Long id){
		Student student =  studentRepository.findById(id)
				.orElseThrow(()-> new ResouceNotFoundException("No student with this id found: " + id));
		studentRepository.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
}
  