package com.tqapp.tqApp.service;


import com.tqapp.tqApp.model.TqApp;
import com.tqapp.tqApp.repository.TqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TqAppService {
  @Autowired
  private TqRepository tqRepository;

  public TqApp create(String FirstName,String Lastname,int MobNo,int cardNo,int Balance) {
    return tqRepository.save(new TqApp(FirstName,Lastname,MobNo,cardNo,Balance));
  }

  public TqApp update(String firstName,int balance) {
    TqApp p = tqRepository.findByFirstName(firstName);
    p.setBalance(balance);
    return (tqRepository.save(p));
  }

}
