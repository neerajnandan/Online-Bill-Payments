package com.cognizant.billpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.billpaymentsystem.model.User;
import com.cognizant.billpaymentsystem.model.Vendor;


public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserid(String userid);
	
	User findById(int id);
	
	@Query("From User")
	List<User> getUser();

}
