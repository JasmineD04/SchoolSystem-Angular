package com.angular.PerformanceAnalysis.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class PerformanceRepository {

  @Autowired
  JdbcTemplate jdbcTemplate;

  public void addTeacher(String firstName,String lastName,String userName,String email,String division,String gender,String password){
    this.jdbcTemplate.update("EXEC performance.sp_registerTeacher ?,?,?,?,?,?,?",firstName,lastName,userName,email,division,gender,password);
  }

  public void addParent(String firstName,String lastName,String userName,String email,String division,String rollNo,String password){
    this.jdbcTemplate.update("EXEC performance.sp_registerParent ?,?,?,?,?,?,?",firstName,lastName,userName,email,division,rollNo,password);
  }

  public Map<String,Object> validateTeacherUserName(String user){
    return this.jdbcTemplate.queryForMap("EXEC performance.sp_validTeacherUserName ?",user);
  }

  public Map<String,Object> validateParentUserName(String user){
    return this.jdbcTemplate.queryForMap("EXEC performance.sp_validParentUserName ?",user);
  }

  public List<Map<String, Object>> getCategories(){

    return this.jdbcTemplate.queryForList("EXEC performance.sp_fetchCategories");
  }

  public List<Map<String, Object>> getParameters(Integer CategoryID){

    return this.jdbcTemplate.queryForList("EXEC performance.sp_fetchParameters ?",CategoryID);
  }
  public List<Map<String, Object>> getAllParameters(){

    return this.jdbcTemplate.queryForList("EXEC performance.sp_fetchAllParameters");
  }
  public Map<String,Object> loginParent(String userName,String password){
    return this.jdbcTemplate.queryForMap("EXEC performance.authenticateParentUser  ?,?",userName,password);
  }

  public Map<String,Object> loginTeacher(String userName,String password){
    return this.jdbcTemplate.queryForMap("EXEC performance.sp_authenticateTeacherUser  ?,?",userName,password);
  }

  public void setAllParameters(Integer ParameterID,Integer Rating,String studentID){

    this.jdbcTemplate.update("EXEC performance.sp_addRating ?,?,?",ParameterID,Rating,studentID);
  }

  public void insertRating(Integer categoryID,Integer studentID,Integer rating){
//    System.out.println("Inside repo");
    this.jdbcTemplate.update("EXEC performance.sp_insertFinalRating ?,?,?",categoryID,studentID,rating);
  }

  public List<Map<String, Object>> fetchRatings(Integer studentID){

    return this.jdbcTemplate.queryForList("EXEC performance.sp_fetchRatings ?",studentID);
  }

  public List<Map<String, Object>> fetchAllStudents(){

    return this.jdbcTemplate.queryForList("EXEC performance.sp_fetchAllStudents");
  }




}
