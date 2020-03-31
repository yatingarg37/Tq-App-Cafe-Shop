package com.tqapp.tqApp.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TqApp {
  @Id
  String Id;

  String FirstName,LastName;
  int MobNo,cardNo,Balance;

  public TqApp(String FirstName,String Lastname,int MobNo,int cardNo,int Balance){
    this.FirstName= FirstName;
    this.LastName = Lastname;
    this.Balance = Balance;
    this.MobNo = MobNo;
    this.cardNo = cardNo;
  }

  public int getBalance() {
    return Balance;
  }

  public void setBalance(int balance) {
    Balance = balance;
  }

  public String getFirstName() {
    return FirstName;
  }

  public String getLastName() {
    return LastName;
  }

  public int getMobNo() {
    return MobNo;
  }

  public int getCardNo() {
    return cardNo;
  }

  public void setCardNo(int cardNo) {
    this.cardNo = cardNo;
  }

  public void setFirstName(String firstName) {
    FirstName = firstName;
  }

  public void setLastName(String lastName) {
    LastName = lastName;
  }

  public void setMobNo(int mobNo) {
    MobNo = mobNo;
  }

}
