package com.tqapp.tqApp.repository;


import com.tqapp.tqApp.model.TqApp;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TqRepository extends MongoRepository<TqApp, String> {
  public TqApp findByFirstName(String FirstName);
}
