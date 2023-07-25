package com.donate.fund_raise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.donate.fund_raise.entity.User;
import com.donate.fund_raise.service.service;
@CrossOrigin
@RestController
public class controller {
    
    @Autowired
    service ser;
    
    @PostMapping("/save")
    public String saveUser(@RequestBody User user){
        ser.savedetails(user);
        return "Saved";
    }

    @GetMapping("/findall")
    public List<User> getAll(){
        List<User>allUsers = ser.getAll();
        return allUsers;
    }
}