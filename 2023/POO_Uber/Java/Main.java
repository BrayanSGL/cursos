class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        Car car = new Car("AMQ123", new Account("Andres Herrera", "AND123"));
        car.passenger = 4;
        car.printDataCar();
    }
}