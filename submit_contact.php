<?php
// Change these values to your actual database credentials
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

// Check if the form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Simple validation
    if (empty($name) || empty($email) || empty($message)) {
        echo "<script>alert('Please fill all the fields.'); window.location.href='contact.html';</script>";
        exit();
    }

    // SQL query to insert form data into database
    $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Thank you for contacting us! We will revert shortly on your email.'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Error: " . $sql . "<br>" . $conn->error . "'); window.location.href='contact.html';</script>";
    }

    // Close the connection
    $conn->close();
}
?>
