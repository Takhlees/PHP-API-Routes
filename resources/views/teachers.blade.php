@extends('layouts.app')
@section('title', 'Manage Teachers')
@section('content')

    <section id="teachers" class="panel hidden">
      <h2>Manage Teachers</h2>
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Phone_no</th><th>Address</th><th>Qualification</th><th>User_id</th></tr></thead>
        <tbody id="teacherTable"></tbody>
      </table>
    </section>

<section id="assignments" class="panel">
  <h2>Assignments</h2>
  <button class="toggleFormBtn">Assign Course/Class</button>

  <form id="assignmentForm" class="form-container">
     <label>Teacher:
      <select id="teacherSelect" required></select>
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
        <th>Teacher</th>
        <th>Class</th>
        <th>Course</th>
      </tr>
    </thead>
    <tbody id="assignmentTable"></tbody>
  </table>
</section>

@endsection