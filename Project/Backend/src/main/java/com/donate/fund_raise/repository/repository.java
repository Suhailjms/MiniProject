package com.donate.fund_raise.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.donate.fund_raise.entity.User;

public interface repository  extends JpaRepository<User,Integer>{

}
