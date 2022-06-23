package com.lecottage.lecottagewebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class viewController {

    // 메인페이지
    @GetMapping(value = "")
    public String mainHome(){
        return "main";
    }

    @GetMapping(value = "/businessInfo")
    public String businessInfo() { return "/lecottage/businessInfo"; }

    @GetMapping(value = "/directions")
    public String directions() { return "/lecottage/directions"; }

    @GetMapping(value = "/unit")
    public String unit() { return "/unit/unit"; }

    @GetMapping(value = "/amenity")
    public String amenity() { return "/service/amenity"; }

    @GetMapping(value = "/concierge")
    public String concierge() { return "/service/concierge"; }

    @GetMapping(value = "/premiumInfra")
    public String premiumInfra() { return "/service/premiumInfra"; }

    @GetMapping(value = "/plan")
    public String plan() { return "/plan/plan"; }

    @GetMapping(value = "/contactUs")
    public String contactUs() { return "/contactUs/contactUs"; }

    @GetMapping(value = "/mobile/sideBar")
    public String mobileSideBar(){
        return  "/fragments/mobileSideBar";
    }

}
