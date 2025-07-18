@extends('layouts.app')
@section('title', 'Manage Roadmaps')
@section('content')



    <section id="roadmaps" class="panel hidden">
      <h2>Manage Roadmaps</h2>
      <button class="toggleFormBtn">Add Roadmap</button>
      <form id="roadmapForm" class="form-container">
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="description" placeholder="Description" required />
        <button type="submit">Add Roadmap</button>
      </form>   
      <table>
        <thead><tr><th>Title</th><th>Description</th></tr></thead>
        <tbody id="roadmapTable"></tbody>
      </table>
    </section>


<section id="assignments" class="panel">
  <h2>Assignments</h2>
  <button class="toggleFormBtn">Assign Course</button>

  <form id="assignmentForm" class="form-container">
     <label>Roadmap:
      <select id="roadmapSelect" required></select>
    </label><br>

    <label>Course:
      <select id="courseSelect" required></select>
    </label><br>
    <button type="submit">Assign</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Roadmap</th>
        <th>Course</th>
      </tr>
    </thead>
    <tbody id="assignmentTable"></tbody>
  </table>
</section>

@endsection