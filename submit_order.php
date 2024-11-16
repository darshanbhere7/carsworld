<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "car_dealership";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $car_brand = $_POST['car'];
    $car_model = $_POST['carModel'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $delivery_date = $_POST['deliveryDate'];
    $message = $_POST['message'];

    // SQL query to insert data
    $sql = "INSERT INTO orders (car_brand, car_model, name, email, phone, address, delivery_date, message) 
            VALUES ('$car_brand', '$car_model', '$name', '$email', '$phone', '$address', '$delivery_date', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Thank you for your order! We will contact you shortly.'); window.location.href = 'buying.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
