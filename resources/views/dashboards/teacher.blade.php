<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Teacher Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
  <nav class="navbar">
    <h1>Teacher Portal</h1>
    <ul>
      <!-- <li><a href="#" id="nav-courses">Courses</a></li>
      <li><a href="#" id="nav-topics">Topics</a></li> -->
      <li><a href="/login" id="btn-logout">Logout</a></li>
    </ul>
  </nav>

  <main>
    <section id="section-profile" class="panel hidden">
      <h2>Profile</h2>
      <p><strong>Name:</strong> <span id="teacherName"></span></p>
      <p><strong>Email:</strong> <span id="teacherEmail"></span></p>
      <p><strong>Phone_no:</strong> <span id="teacherPhone"></span></p>
      <p><strong>Address:</strong> <span id="teacherAddress"></span></p>
    </section>

    <section id="section-courses" class="panel hidden">
      <h2>Your Courses</h2>
      <table><thead><tr><th>Course</th><th>Class</th><th>Roadmap</th></tr></thead>
        <tbody id="table-courses"></tbody></table>
    </section>

    <section id="section-topics" class="panel hidden">
      <h2>Topics</h2>
      <ul id="list-topics"></ul>
    </section>
  </main>

 <script src="{{ asset('javascript/script.js') }}"></script>
</body>
</html>
