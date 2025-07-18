@extends('layouts.app')
@section('title', 'Admin Portal')
@section('content')

    <section id="roles" class="panel hidden">
      <h2>Manage Roles</h2>
      <button class="toggleFormBtn">Add Role</button>
      <form id="roleForm" class="form-container">
        <input type="text" name="name" placeholder="Name" required />
        <button type="submit">Add Role</button>
      </form>
    
      <table>
        <thead><tr><th>Role_name</th></tr></thead>
        <tbody id="roleTable"></tbody>
      </table>
    </section>
  

    <section id="permissions" class="panel hidden">
      <h2>Manage Permissions</h2>
      <button class="toggleFormBtn">Add Permission</button>
      <form id="permissionForm" class="form-container">
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="description" placeholder="Description" required />
        <button type="submit">Add Permission</button>
      </form>
    
      <table>
        <thead><tr><th>Name</th><th>Description</th></tr></thead>
        <tbody id="permissionTable"></tbody>
      </table>
    </section>



<section id="assignments" class="panel">
  <h2>Assignments</h2>
  <button class="toggleFormBtn">Assign Permissions</button>

  <form id="assignmentForm" class="form-container">
    <label>Role_id:
      <select id="roleSelect" required></select>
    </label><br>

    <label>Permission_id:
      <select id="permissionSelect" required></select>
    </label><br>
    <button type="submit">Assign</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Role_id</th>
        <th>Permission_id</th>
      </tr>
    </thead>
    <tbody id="assignmentTable"></tbody>
  </table>
</section>


  
    @endsection

  