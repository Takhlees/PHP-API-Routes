@extends('layouts.app')
@section('title', 'Manage Topics')
@section('content')


    <section id="topics" class="panel hidden">
      <h2>Manage Topics</h2>
      <button class="toggleFormBtn">Add Topics</button>
      <form id="topicForm" class="form-container">
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="description" placeholder="Description" required />

      <select id="roadmapSelect" required>
        <option value="">Select Roadmap_id</option>
      </select>

      <select id="courseSelect" required>
        <option value="">Select Course_id</option>
      </select>
        <button type="submit">Add Topics</button>
      </form>
      <table>
        <thead><tr><th>Title</th><th>Description</th><th>Roadmap_id</th><th>Course_id</th></tr></thead>
        <tbody id="topicTable"></tbody>
      </table>
    </section>

@endsection