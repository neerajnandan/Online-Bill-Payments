package com.cognizant.billpaymentsystem.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.billpaymentsystem.model.Bill;
import com.cognizant.billpaymentsystem.model.User;

public interface BillRepository extends JpaRepository<Bill, Integer>{

	
	Bill findById(int id);
	
	
	@Query("From Bill")
	List<Bill> getBill();

	
	@Query("SELECT u.bills from User u WHERE u.userid=?1")
	List<Bill> getUserBill(String id);
	

}
