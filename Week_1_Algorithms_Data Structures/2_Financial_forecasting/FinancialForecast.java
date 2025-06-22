import java.util.Scanner;

public class FinancialForecast {
  
    public static double calculateFutureValue(double initialValue, double growthRate, int years) {
       
        if (years == 0) {
            return initialValue;
        }

        
        double previousValue = calculateFutureValue(initialValue, growthRate, years - 1);
        return previousValue * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the initial value");
        double initialValue = sc.nextDouble(); 

        System.out.println("Enter growth rate(in percentage)");
        double growthRate = sc.nextDouble();  
        
        System.out.println("Enter the number of years");
        int years = sc.nextInt();               

        double futureValue = calculateFutureValue(initialValue, growthRate, years);

        System.out.println("Future Value after "+ years+" years "+" is "+ futureValue);
    }
}
