package com.lecottage.lecottagewebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class viewController {

    // 메인페이지
    @GetMapping(value = "")
    public String Home(){
        return "main";
    }


}
