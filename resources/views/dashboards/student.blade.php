<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
  <nav class="navbar">
    <h1>Student Portal</h1>
    <ul>
      <!-- <li><a href="#" id="nav-courses">Courses</a></li>
      <li><a href="#" id="nav-topics">Topics</a></li> -->
      <li><a href="/login" id="btn-logout">Logout</a></li>
    </ul>
  </nav>

  <main>
    <section class="panel" id="section-profile">
      <h2>Profile</h2>
      <p><strong>Name:</strong> <span id="studentName"></span></p>
      <p><strong>Email:</strong> <span id="studentEmail"></span></p>
      <p><strong>Class:</strong> <span id="studentClass"></span></p>
      <p><strong>Phone_no:</strong> <span id="studentPhone"></span></p>
      <p><strong>Address:</strong> <span id="studentAddress"></span></p>
    </section>

    <section class="panel hidden" id="section-courses">
      <h2>Enrolled Courses</h2>
      <table>
        <thead>
          <tr><th>Course</th><th>Teacher</th><th>Status</th><th>Roadmap</th></tr>
        </thead>
        <tbody id="table-courses"></tbody>
      </table>
    </section>

    <section class="panel hidden" id="section-topics">
      <h2>Topics</h2>
      <ul id="list-topics"></ul>
    </section>
  </main>

  <script src="{{ asset('javascript/script.js') }}"></script>
</body>
</html>
