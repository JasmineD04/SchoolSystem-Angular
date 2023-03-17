package com.angular.PerformanceAnalysis.web;

import com.angular.PerformanceAnalysis.service.PerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PerformanceResource {

  @Autowired
  private PerformanceService performanceService;

  @PostMapping("/addTeacher")
  public void addTeacher(@RequestBody Map<String,Object> teacherData){
    performanceService.addTeacher(teacherData);

  }

  @PostMapping("/addParent")
  public void addParent(@RequestBody Map<String,Object> parentData){
    performanceService.addParent(parentData);

  }

  @GetMapping("checkName/{user}")
  public Map<String,Object> validateTeacherUserName(@PathVariable String user) {
    return performanceService.validateTeacherUserName(user);
  }

  @GetMapping("checkParentName/{user}")
  public Map<String,Object> validateParentUserName(@PathVariable String user) {
    return performanceService.validateParentUserName(user);
  }

  @GetMapping("/categories")
  public List<Map<String, Object>> getCategories(){
    return performanceService.getCategories();
  }

  @GetMapping("/parameters/{CategoryID}")
  public List<Map<String, Object>> getParameters(@PathVariable Integer CategoryID){
    return performanceService.getParameters(CategoryID);
  }

  @GetMapping("allParameters")
  public List<Map<String,Object>> getAllParameters(){
    return performanceService.getAllParameters();
  }

  @PostMapping("/loginParent")
  public Map<String,Object> loginParent(@RequestBody Map<String,Object> parentLoginData){
    return performanceService.loginParent(parentLoginData);
  }
  @PostMapping("/loginTeacher")
  public Map<String,Object> loginTeacher(@RequestBody Map<String,Object> teacherLoginData){
    return performanceService.loginTeacher(teacherLoginData);
  }

  @PostMapping("/setAllParameters")
  public void setAllParameters(@RequestBody Map<String,Object> parameterData){
    performanceService.setAllParameters(parameterData);
  }

  @PostMapping("/insertRating")
  public void insertRating(@RequestBody Map<String,Object> ratingData){
    performanceService.insertRating(ratingData);
  }

  @GetMapping("/fetchRatings/{studentID}")
  public List<Map<String,Object>> fetchRatings(@PathVariable Integer studentID){
        return performanceService.fetchRatings(studentID);
  }

  @GetMapping("/students")
  public List<Map<String,Object>> fetchAllStudents(){
    return performanceService.fetchAllStudents();
  }


}
