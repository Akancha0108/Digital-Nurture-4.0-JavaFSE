import java.util.Arrays;
import java.util.Scanner;

class Product implements Comparable<Product> {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }

}

public class ProductSearchDemo {

    public static Product linearSearch(Product[] products, int productId) {
        for (Product product : products) {
            if (product.productId == productId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int productId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].productId == productId) {
                return products[mid];
            } else if (products[mid].productId < productId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Scanner scanner=new Scanner(System.in);

        Product[] products = {
            new Product(5, "Laptop", "Electronics"),
            new Product(3, "Shoes", "Fashion"),
            new Product(8, "Smartphone", "Electronics"),
            new Product(1, "Book", "Education"),
            new Product(6, "Watch", "Accessories")
        };

        System.out.println("Enter the product id to search");
        int pid=scanner.nextInt();

        System.out.println("Linear Search:");
        Product result = linearSearch(products, pid);
        if (result != null) {
            System.out.println("Found: " + result);
        } else {
            System.out.println("Product not found.");
        }

        Arrays.sort(products);

        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(products, pid);
        if (result2 != null) {
            System.out.println("Found: " + result2);
        } else {
            System.out.println("Product not found.");
        }
    }
}
