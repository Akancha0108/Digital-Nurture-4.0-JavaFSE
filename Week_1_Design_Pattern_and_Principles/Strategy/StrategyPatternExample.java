
import java.util.Scanner;

interface PaymentStrategy {
    void pay(double amount);
}

class CreditCardPayment implements PaymentStrategy {
    @Override public void pay(double amount) {
        System.out.println("Paid " + amount + " using Credit Card.");
    }
}

class PayPalPayment implements PaymentStrategy {
    @Override public void pay(double amount) {
        System.out.println("Paid " + amount + " using PayPal.");
    }
}

class PaymentContext {
    private PaymentStrategy strategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void pay(double amount) {
        strategy.pay(amount);
    }
}

public class StrategyPatternExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PaymentContext context = new PaymentContext();
        context.setPaymentStrategy(new CreditCardPayment());
        System.out.println("Enter the amount paid from CreditCard");
        double price=scanner.nextDouble();
        context.pay(price);

        context.setPaymentStrategy(new PayPalPayment());
        System.out.println("Enter the amount paid from PayPal");
        double pricep=scanner.nextDouble();
        context.pay(pricep);
        scanner.close();
    }
}
