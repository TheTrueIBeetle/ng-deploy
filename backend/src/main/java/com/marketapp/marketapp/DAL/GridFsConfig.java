package com.marketapp.marketapp.DAL;

import com.mongodb.client.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.MongoDatabaseFactory;

@Configuration
public class GridFsConfig {

    private MongoClient mongoClient;

    @Bean
    public MongoDatabaseFactory mongoDatabaseFactory() {

        return new SimpleMongoClientDatabaseFactory
                ("mongodb+srv://admin:KqZVIcWcbn5jHe4Q@cluster0.rsb1ps8.mongodb.net/marketdb");
    }
}
