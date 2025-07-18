@extends('layouts.app')
@section('title', 'Admin Portal')
@section('content')

    <section>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin portal. Here you can manage all aspects of the School Management System.</p>
    </section>

    <section id="users" class="panel hidden">
      <h2>Manage Users</h2>
      <button class="toggleFormBtn">Add User</button>
      <form id="userForm" class="form-container">
       
      <select id="roleSelect" required>
        <option value="">Select Role_id</option>
      </select>
    
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="password" placeholder="Password" required />
        <button type="submit">Add User</button>
      </form>
    
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Password</th><th>role_id</th></tr></thead>
        <tbody id="userTable"></tbody>
      </table>
    </section>
  

    <section id="attendances" class="panel hidden">
      <h2>Manage Attendance</h2>
      <button class="toggleFormBtn">Add Attendance</button>
      <form id="attendanceForm" class="form-container">
       
      <select id="userSelect" required>
        <option value="">Select User_id</option>
      </select>
    
        <select name="role_type" required>
           <option value="">Select Role Type</option>
           <option value="student">Student</option>
           <option value="teacher">Teacher</option>
        </select>
        <input type="date" name="date" placeholder="Date" required />
        <input type="time" name="password" placeholder="Check In" required />
        <input type="time" name="password" placeholder="Check Out" required />
        <button type="submit">Add Attendance</button>
      </form>
    
      <table>
        <thead><tr><th>user_id</th><th>role_type</th><th>date</th><th>check_in</th><th>check_out</th></tr></thead>
        <tbody id="attendanceTable"></tbody>
      </table>
    </section>
  
    @endsection
