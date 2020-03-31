package com.tqapp.tqApp.controller;


import com.tqapp.tqApp.model.TqApp;
import com.tqapp.tqApp.repository.TqRepository;
import com.tqapp.tqApp.service.TqAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class tqController {

  @Autowired
  private TqAppService tqAppService;
  @Autowired
  private TqRepository tqRepository;

  @RequestMapping("/create")
  public String create(@RequestParam String FirstName,@RequestParam String Lastname,@RequestParam int MobNo,@RequestParam int cardNo,@RequestParam int Balance){
    TqApp p=tqAppService.create(FirstName, Lastname, MobNo, cardNo, Balance);
    return p.toString();
  }

  @RequestMapping("/update")
  public String update(String FirstName,int balance) {
    TqApp p = tqAppService.update(FirstName, balance);
    return p.toString();
  }


}
