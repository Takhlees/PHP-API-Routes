@extends('layouts.app')
@section('title', 'Manage Students')
@section('content')


    <section id="students" class="panel hidden">
      <h2>Manage Students</h2>

      <table>
        <thead><tr><th>RollNo</th><th>Name</th><th>Email</th><th>PhoneNo</th><th>Address</th><th>User_id</th><th>Class_id</th><th>Actions</th></tr></thead>
        <tbody id="studentTable"></tbody>
      </table>
    </section>


<section id="assignments" class="panel">
  <h2>Assignments</h2>
  <button class="toggleFormBtn">Assign Course/Class</button>

  <form id="assignmentForm" class="form-container">
     <label>Student:
      <select id="studentSelect" required></select>
    </label><br>

    <label>Class:
      <select id="classSelect" required></select>
    </label><br>

    <label>Course:
      <select id="courseSelect" required></select>
    </label><br>
    <button type="submit">Assign</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Student</th>
        <th>Class</th>
        <th>Course</th>
      </tr>
    </thead>
    <tbody id="assignmentTable"></tbody>
  </table>
</section>

@endsection