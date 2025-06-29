package com.mycompany;

import org.junit.After;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTestAAA {

    private Calculator calculator;

    
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAddition() {
      
        int a = 2;
        int b = 3;

        int result = calculator.add(a, b);

        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        
        int a = 5;
        int b = 3;
        int result = calculator.subtract(a, b);
        assertEquals(2, result);
    }
}
