package com.donate.fund_raise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donate.fund_raise.entity.User;
import com.donate.fund_raise.repository.repository;

import jakarta.persistence.EntityManager;

@Service
public class service {

    @Autowired
    private repository re;

    @Autowired
    EntityManager entityManager;
    
    public User savedetails(User user){
        return re.save(user);
    }
    public List<User> getAll(){
        return re.findAll();
    }
}
