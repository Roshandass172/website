<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: 'Times New Roman', serif;
            height: 100vh;
            background-image: url('robo.jpg');
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white; /* Change text color for visibility */
        }
        .container {
            border: 2px solid #ddd;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
            width: 400px;
            display: flex;
            flex-direction: column;
        }
        .form {
            margin-top: 20px;
        }
        .form label {
            display: block;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <div class="form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
            <button type="submit">Submit</button>
        </div>
    </div>
</body>
</html>
