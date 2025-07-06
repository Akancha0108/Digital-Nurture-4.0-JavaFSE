package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);
        testAddCountry();         //Additional Exercise
        testFindCountryByCode();  //Additional Exercise
        testGetAllCountries();    
    }
// Additional Exercise
    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End - Get All Countries");
    }
    private static void testAddCountry() {
        LOGGER.info("Start - Add Country");
        Country newCountry = new Country();
        newCountry.setCode("FR");
        newCountry.setName("France");
        countryService.addCountry(newCountry);
        LOGGER.debug("Added country: {}", newCountry);
        LOGGER.info("End - Add Country");
    }
    private static void testFindCountryByCode() {
        LOGGER.info("Start - Find Country by Code");
        Country country = countryService.findCountryByCode("FR");
        if (country != null) {
            LOGGER.debug("Found country: {}", country);
        } else {
            LOGGER.debug("Country not found");
        }
        LOGGER.info("End - Find Country by Code");
    }
}
