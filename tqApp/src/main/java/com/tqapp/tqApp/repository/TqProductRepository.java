package com.tqapp.tqApp.repository;


import com.tqapp.tqApp.model.TqAppProduct;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TqProductRepository extends MongoRepository<TqAppProduct,String> {

}
