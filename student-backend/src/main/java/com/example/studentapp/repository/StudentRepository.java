package com.example.studentapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.studentapp.model.Student;

@Repository
public interface StudentRepository<T> extends JpaRepository<Student, Long> {

}
  