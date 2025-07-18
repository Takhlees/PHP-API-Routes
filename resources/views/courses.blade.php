@extends('layouts.app')
@section('title', 'Manage Courses')
@section('content')


    <section id="courses" class="panel hidden">
      <h2>Manage Courses</h2>
      <button class="toggleFormBtn">Add Course</button>

      <form id="courseForm" class="form-container">
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="description" placeholder="Description" required />
        <input type="number" name="credit_hours" placeholder="Credit_hours" required />
        <button type="submit">Add Course</button>
      </form>
    
      <table>
        <thead><tr><th>Name</th><th>Description</th><th>Credit_Hours</th></tr></thead>
        <tbody id="courseTable"></tbody>
      </table>
    </section>

@endsection