package com.tqapp.tqApp.model;


import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TqAppProduct {
  @Id
  String id;

  String Name;
  int price;
  Binary image;

}
