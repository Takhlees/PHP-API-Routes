<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Signup</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
    <div class="container">
    <h1>Registration</h1>
<form id="signup-form">
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="password" name="password" placeholder="Password" required />
  <input type="password" name="password_confirmation" placeholder="Confirm Password" required />
  <select name="role" required>
    <option value="teacher">Teacher</option>
    <option value="student">Student</option>
  </select>
  <button type="submit">Sign Up</button>
</form>

    <p>Already registered? <a href="/login">Login here</a></p>
    </div>
     <script src="{{ asset('javascript/script.js') }}"></script>
</body>
</html>


