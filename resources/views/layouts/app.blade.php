<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>@yield('title')</title>
  <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
  <nav class="navbar">
    <h1>Admin Panel</h1>
    <ul>
      <li><a href="/dashboards/admin">Users</a></li>
      <li><a href="/role_permissions">Role_Permissions</a></li>
      <li><a href="/teachers">Teachers</a></li>
      <li><a href="/students">Students</a></li>
      <li><a href="/courses">Courses</a></li>
      <li><a href="/classes">Classes</a></li>
      <li><a href="/roadmaps">Roadmaps</a></li>
      <li><a href="/topics">Topics</a></li>
      <li><a href="/login" id="btn-logout">Logout</a></li>
    </ul>
  </nav>

  <main>
    @yield('content')
  </main>

  <script src="{{ asset('javascript/script.js') }}"></script>
</body>
</html>
