package com.angular.PerformanceAnalysis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import javax.swing.*;

@SpringBootApplication
public class PerformanceAnalysisApplication {

	public static void main(String[] args) {
    ConfigurableApplicationContext applicationContext= SpringApplication.run(PerformanceAnalysisApplication.class, args);
	}

}
