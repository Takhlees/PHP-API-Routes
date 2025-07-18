@extends('layouts.app')
@section('title', 'Manage Classes')
@section('content')


    <section id="classes" class="panel hidden">
      <h2>Manage Classes</h2>
      <button class="toggleFormBtn">Add Class</button>
      <form id="classForm" class="form-container">
        <input type="text" name="name" placeholder="Name" required />

      <select id="roadmapSelect" required>
        <option value="">Select Roadmap_id</option>
      </select>
    
        <button type="submit">Add Class</button>
      </form>
      <table>
        <thead><tr><th>Name</th><th>Roadmap_id</th></tr></thead>
        <tbody id="classTable"></tbody>
      </table>
    </section>



<section id="assignments" class="panel">
  <h2>Assignments</h2>
  <button class="toggleFormBtn">Assign Course/Roadmap</button>

  <form id="assignmentForm" class="form-container">
    <label>Class:
      <select id="classSelect" required></select>
    </label><br>

    <label>Course:
      <select id="courseSelect" required></select>
    </label><br>

    <label>Roadmap:
      <select id="roadmapSelect" required></select>
    </label><br>
    <button type="submit">Assign</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>Course</th>
        <th>Roadmap</th>
      </tr>
    </thead>
    <tbody id="assignmentTable"></tbody>
  </table>
</section>


@endsection