package com.mycompany;

import static org.junit.Assert.*;
import org.junit.Test;

public class CalculatorTest {
    
    @Test
    public void testAddition() {
        int result = 2 + 3;
        assertEquals(5, result);
    }
    
}
