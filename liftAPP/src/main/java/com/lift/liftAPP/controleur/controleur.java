package com.lift.liftAPP.controleur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.lift.liftAPP.Service.Service;  // <--- Add this line
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
// @RestController And @RequestMapping("/eolienne") is todo
public class controleur {

    @Autowired
    private Service service;
//
//    @PostMapping("path")
//    public String postMethodName(@RequestBody String entity) {
        //TODO: process POST request
//        
//        return entity;
//    }
//    


}
