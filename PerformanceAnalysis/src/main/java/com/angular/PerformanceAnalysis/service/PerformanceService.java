package com.angular.PerformanceAnalysis.service;


import com.angular.PerformanceAnalysis.repository.PerformanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PerformanceService {

  @Autowired
  private PerformanceRepository performanceRepository;

  public void addTeacher(Map<String,Object> teacherData)
  {
    String firstName = (String) teacherData.get("firstName");
    String lastName = (String) teacherData.get("lastName");
    String userName = (String) teacherData.get("userName");
    String email = (String) teacherData.get("email");
    String division = (String) teacherData.get("division");
    String gender = (String) teacherData.get("gender");
    String password = (String) teacherData.get("password");

    performanceRepository.addTeacher(firstName,lastName,userName,email,division,gender,password);

  }

  public void addParent(Map<String,Object> parentData)
  {
    String firstName = (String) parentData.get("firstName");
    String lastName = (String) parentData.get("lastName");
    String userName = (String) parentData.get("userName");
    String email = (String) parentData.get("email");
    String division = (String) parentData.get("division");
    String rollNo = (String) parentData.get("rollNo");
    String password = (String) parentData.get("password");

    performanceRepository.addParent(firstName,lastName,userName,email,division,rollNo,password);
  }

  public  Map<String,Object> validateTeacherUserName(String user){
    return  performanceRepository.validateTeacherUserName(user);
  }

  public  Map<String,Object> validateParentUserName(String user){
    return  performanceRepository.validateParentUserName(user);
  }

  public List<Map<String, Object>> getCategories(){
    return performanceRepository.getCategories();
  }

  public List<Map<String, Object>> getParameters(Integer CategoryID){
    return performanceRepository.getParameters(CategoryID);
  }
  public List<Map<String, Object>> getAllParameters(){
    return performanceRepository.getAllParameters();
  }

  public Map<String,Object> loginParent(Map<String,Object> parentLoginData){
    String userName =(String) parentLoginData.get("userName");
    String password =(String) parentLoginData.get("password");

    return performanceRepository.loginParent(userName,password);

  }

  public Map<String,Object> loginTeacher(Map<String,Object> teacherLoginData){

    String userName =(String) teacherLoginData.get("userName");
    String password =(String) teacherLoginData.get("password");


    return performanceRepository.loginTeacher(userName,password);

  }

  public void setAllParameters(Map<String,Object> parameterData){
//    Integer ParameterID = (Integer) parameterData.get("ParameterID");
//    Integer Rating =(Integer) parameterData.get("Rating");
//    performanceRepository.setAllParameters(ParameterID,Rating);
      String studentID = (String)parameterData.get("studentID");
      Map<Integer,Integer> paramData =(Map<Integer,Integer>)parameterData.get("mainData");
      for(Map.Entry<Integer,Integer> entry: paramData.entrySet()){
        System.out.println(entry.getKey()+" "+entry.getValue());
        Integer ParameterID = entry.getKey();
        Integer Rating = entry.getValue();
        System.out.println(ParameterID+" "+Rating);
        performanceRepository.setAllParameters(ParameterID,Rating,studentID);
    }
   }

   public void insertRating(Map<String,Object> ratingData){
      System.out.println("Inside service");
      Integer categoryID = (Integer) ratingData.get("categoryId");
      Integer studentID = Integer.parseInt((String)ratingData.get("RollNo"));
      Integer rating = (Integer) ratingData.get("ratingID");
      performanceRepository.insertRating(categoryID,studentID,rating);
   }

  public List<Map<String, Object>> fetchRatings(Integer studentID){
    return performanceRepository.fetchRatings(studentID);
  }


  public List<Map<String, Object>> fetchAllStudents(){
    return performanceRepository.fetchAllStudents();
  }


  }

