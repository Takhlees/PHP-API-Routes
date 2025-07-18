//teacher-dashboard

// document.addEventListener('DOMContentLoaded', async () => {
//   const token = localStorage.getItem('auth_token');
//   if (!token) {
//     alert("Please login first");
//     return window.location.href = '/login';
//   }

//   try {
//     const res = await fetch('http://127.0.0.1:8000/api/teacher/dashboard', {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     if (!res.ok) {
//       throw new Error('Failed to load dashboard data');
//     }

//     const data = await res.json();

//     document.getElementById('teacherName').textContent = data.profile.name;
//     document.getElementById('teacherEmail').textContent = data.profile.email;
//     document.getElementById('teacherPhone').textContent = data.profile.phone;
//     document.getElementById('teacherAddress').textContent = data.profile.address;

// const courseTable = document.getElementById('table-courses');
// data.courses.forEach(c => {

//   const roadmapObj = data.roadmaps.find(r => r.course === c.name);
//   const roadmapList = roadmapObj ? roadmapObj.roadmap.map(step => `<li>${step}</li>`).join('') : 'N/A';

//   const tr = document.createElement('tr');
//   tr.innerHTML = `
//     <td>${c.name}</td>
//     <td>${c.class}</td>
//     <td><ul>${roadmapList}</ul></td>
//   `;
//   courseTable.appendChild(tr);
// });

//     const listRender = (id, items) => {
//       const el = document.getElementById(id);
//       items.forEach(i => {
//         const li = document.createElement('li');
//         li.textContent = i;
//         el.appendChild(li);
//       });
//     };

//     listRender('list-topics', data.topics);

//     const sections = ['courses','classes','roadmaps','topics'];
//     sections.forEach(sec => {
//       document.getElementById(`nav-${sec}`).addEventListener('click', () => {
//         document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
//         document.querySelector(`#section-${sec}`).classList.remove('hidden');
//       });
//     });

//   } catch (err) {
//     console.error(err);
//     alert('Could not load dashboard.');
//     window.location.href = '/login.html';
//   }
// });

// //student-dashboard

// document.addEventListener('DOMContentLoaded', async () => {
//   const token = localStorage.getItem('auth_token');
//   if (!token) {
//     alert("Please login first.");
//     return window.location.href = "/login";
//   }

//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/student/dashboard", {
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     });

//     if (!res.ok) throw new Error("Failed to load dashboard");

//     const student = await res.json();

//     document.getElementById("studentName").textContent = student.name;
//     document.getElementById("studentEmail").textContent = student.email;
//     document.getElementById("studentClass").textContent = student.class;
//     document.getElementById('studentPhone').textContent = student.phone;
//     document.getElementById('studentAddress').textContent = student.address;

// const courseTable = document.getElementById("table-courses");
// student.courses.forEach(course => {
//   const roadmapItems = course.roadmap.map(step => `<li>${step}</li>`).join('');
//   const row = document.createElement('tr');
//   row.innerHTML = `
//     <td>${course.name}</td>
//     <td>${course.teacher}</td>
//     <td>${course.status}</td>
//     <td><ul>${roadmapItems}</ul></td>
//   `;
//   courseTable.appendChild(row);
// });

//     const topicList = document.getElementById("list-topics");
//     student.topics.forEach(topic => {
//       const li = document.createElement('li');
//       li.textContent = topic;
//       topicList.appendChild(li);
//     });

//     const sections = ['courses', 'roadmap', 'topics'];
//     sections.forEach(sec => {
//       document.getElementById(`nav-${sec}`).addEventListener('click', () => {
//         document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
//         document.getElementById(`section-${sec}`).classList.remove('hidden');
//       });
//     });

//   } catch (err) {
//     console.error(err);
//     alert("Session expired. Please login again.");
//     localStorage.clear();
//     window.location.href = "/login.html";
//   }
// });

// //signup-form

// document.getElementById("signup-form").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const formData = {
//     name: form.name.value,
//     email: form.email.value,
//     password: form.password.value,
//     password_confirmation: form.password_confirmation.value,
//     role: form.role.value
//   };

//   const response = await fetch("http://127.0.0.1:8000/api/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formData)
//   });

//   const data = await response.json();

//   if (response.ok) {
//     localStorage.setItem("auth_token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));

//     const role = data.user.role;
//     redirectToDashboard(role);
//   } else {
//     alert(data.message || "Registration failed");
//   }
// });

// //login-form

// document.getElementById("login-form").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const formData = {
//     email: form.email.value,
//     password: form.password.value
//   };

//   const response = await fetch("http://127.0.0.1:8000/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formData)
//   });

//   const data = await response.json();

//   if (response.ok) {
//     localStorage.setItem("auth_token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));

//     const role = data.user.role;
//     redirectToDashboard(role);
//   } else {
//     alert(data.message || "Registration failed");
//   }
// });

// function redirectToDashboard(role) {
//   if (role === "admin") {
//     window.location.href = "/dashboards/admin.html";
//   } else if (role === "teacher") {
//     window.location.href = "/dashboards/teacher.html";
//   } else {
//     window.location.href = "/dashboards/student.html";
//   }
// }

// //logout

// document.getElementById("btn-logout").addEventListener("click", async () => {
//   const token = localStorage.getItem("auth_token");

//   await fetch("http://127.0.0.1:8000/api/logout", {
//     method: "POST",
//     headers: {
//       "Authorization": "Bearer " + token
//     }
//   });

//   localStorage.clear();
//   window.location.href = "/login";
// });

// //admin-dashboard
const toggleBtns = document.querySelectorAll(".toggleFormBtn");

toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const form = btn.nextElementSibling;

        if (form && form.classList.contains("form-container")) {
            form.style.display =
                form.style.display === "block" ? "none" : "block";
        }
    });
});

document.getElementById("userForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
    };

    const res = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    const data = await res.json();
    if (res.ok) {
        alert("User added!");
        form.reset();
        loadUsers();
    } else {
        alert(data.message || "Error adding teacher");
    }
});

let roleList = [];
async function loadUsers() {
    if (roleList.length === 0) {
        const res = await fetch("http://localhost:8000/api/roles");
        roleList = await res.json();
    }
    const res = await fetch("http://localhost:8000/api/users");
    const users = await res.json();
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((u) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.password}</td>
       <td>${getRoleNameById(s.role_id)}</td>
      <td>
        <button onclick="editUser(${u.id})">Edit</button>
        <button onclick="deleteUser(${u.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

async function deleteUser(id) {
    if (!confirm("Delete this user?")) return;
    const res = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadUsers();
}

function editUser(id) {
    const row = [...document.querySelectorAll("#userTable tr")].find((tr) =>
        tr.innerHTML.includes(`editUser(${id})`)
    );

    const nameCell = row.children[0];
    const emailCell = row.children[1];
    const passwordCell = row.children[2];
    const roleIdCell = row.children[3];
    const actionsCell = row.children[4];

    const currentName = nameCell.textContent;
    const currentEmail = emailCell.textContent;
    const currentPassword = passwordCell.textContent;
    const currentRoleId =
        roleList.find((r) => r.name === roleIdCell.textContent)?.id || "";
    const roleOptions = roleList
        .map(
            (r) =>
                `<option value="${r.id}" ${
                    r.id == currentRoleId ? "selected" : ""
                }>${r.name}</option>`
        )
        .join("");

    nameCell.innerHTML = `<input type="text" value="${currentName}" id="edit-name-${id}" />`;
    emailCell.innerHTML = `<input type="email" value="${currentEmail}" id="edit-email-${id}" />`;
    passwordCell.innerHTML = `<input type="text" value="${currentPassword}" id="edit-password-${id}" />`;
    roleIdCell.innerHTML = `<select id="edit-role_id-${id}">${roleOptions}</select>`;
    actionsCell.innerHTML = `
    <button onclick="saveUser(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentName}', '${currentEmail}', '${currentPassword}', '${currentRoleId}')">Cancel</button>
  `;
}

async function saveUser(id) {
    const name = document.getElementById(`edit-name-${id}`).value;
    const email = document.getElementById(`edit-email-${id}`).value;
    const password = document.getElementById(`edit-password-${id}`).value;
    const role_id = document.getElementById(`edit-role_id-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role_id }),
    });

    if (res.ok) {
        alert("User updated successfully");
        loadUsers();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(
    id,
    originalName,
    originalEmail,
    originalPassword,
    originalAddress
) {
    const row = [...document.querySelectorAll("#userTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveUser(${id})`)
    );

    row.innerHTML = `
    <td>${originalName}</td>
    <td>${originalEmail}</td>
    <td>${originalPassword}</td>
    <td>${originalAddress}</td>
    <td>
      <button onclick="editUser(${id})">Edit</button>
      <button onclick="deleteUser(${id})">Delete</button>
    </td>
  `;
}

document
    .getElementById("attendanceForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();
        const form = e.target;
        const attendance = {
            role_type: form.name.value,
            date: form.name.value,
            check_in: form.name.value,
            check_out: form.name.value,
        };

        const res = await fetch("http://localhost:8000/api/attendances", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(attendance),
        });

        const data = await res.json();
        if (res.ok) {
            alert("Attendance added!");
            form.reset();
            loadAttendances();
        } else {
            alert(data.message || "Error adding attendance");
        }
    });

let userList = [];
async function loadAttendances() {
    if (userList.length === 0) {
        const res = await fetch("http://localhost:8000/api/users");
        userList = await res.json();
    }

    const res = await fetch("http://localhost:8000/api/attendances");
    const attendances = await res.json();
    const table = document.getElementById("attendanceTable");
    table.innerHTML = "";

    attendances.forEach((a) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${a.role_type}</td>
      <td>${a.date}</td>
      <td>${a.check_in}</td>
      <td>${a.check_in}</td>
       <td>${getUserNameById(a.user_id)}</td>
      <td>
        <button onclick="editAttendance(${a.id})">Edit</button>
        <button onclick="deleteAttendance(${a.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

function getUserNameById(id) {
    const user = userList.find((u) => u.id === id);
    return user ? user.name : "N/A";
}

async function deleteAttendance(id) {
    if (!confirm("Delete this attendance?")) return;
    const res = await fetch(`http://localhost:8000/api/attendances/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadAttendances();
}

function editAttendance(id) {
    const row = [...document.querySelectorAll("#attendanceTable tr")].find(
        (tr) => tr.innerHTML.includes(`editAttendance(${id})`)
    );

    const role_typeCell = row.children[0];
    const dateCell = row.children[1];
    const check_inCell = row.children[2];
    const check_outCell = row.children[3];
    const userIdCell = row.children[4];
    const actionsCell = row.children[5];

    const currentRoleType = role_typeCell.textContent;
    const currentDate = dateCell.textContent;
    const currentCheckIn = check_inCell.textContent;
    const currentCheckOut = check_outCell.textContent;
    const currentUserId =
        userList.find((u) => u.name === userIdCell.textContent)?.id || "";
    const userOptions = userList
        .map(
            (u) =>
                `<option value="${u.id}" ${
                    u.id == currentUserId ? "selected" : ""
                }>${u.name}</option>`
        )
        .join("");

    role_typeCell.innerHTML = `
  <select id="edit-role_type-${id}">
    <option value="">Select Role Type</option>
    <option value="student" ${
        currentRoleType === "student" ? "selected" : ""
    }>Student</option>
    <option value="teacher" ${
        currentRoleType === "teacher" ? "selected" : ""
    }>Teacher</option>
  </select>`;
    dateCell.innerHTML = `<input type="date" value="${currentDate}" id="edit-date-${id}" />`;
    check_inCell.innerHTML = `<input type="time" value="${currentCheckIn}" id="edit-check_in-${id}" />`;
    check_outCell.innerHTML = `<input type="time" value="${currentCheckOut}" id="edit-check_out-${id}" />`;
    userIdCell.innerHTML = `<select id="edit-user_id-${id}">${userOptions}</select>`;
    actionsCell.innerHTML = `
    <button onclick="saveAttendance(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentRoleType}', '${currentDate}', '${currentCheckIn}', '${currentCheckOut}', '${currentUserId}')">Cancel</button>
  `;
}

async function saveAttendance(id) {
    const role_type = document.getElementById(`edit-role_type-${id}`).value;
    const date = document.getElementById(`edit-date-${id}`).value;
    const check_in = document.getElementById(`edit-check_in-${id}`).value;
    const check_out = document.getElementById(`edit-check_out-${id}`).value;
    const user_id = document.getElementById(`edit-user_id-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/attendances/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ role_type, date, check_in, check_out, user_id }),
    });

    if (res.ok) {
        alert("Attendance updated successfully");
        loadAttendances();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(
    id,
    originalRoleType,
    originalDate,
    originalCheckIn,
    originalCheckOut,
    originalUserId
) {
    const row = [...document.querySelectorAll("#attendanceTable tr")].find(
        (tr) => tr.innerHTML.includes(`saveAttendance(${id})`)
    );

    row.innerHTML = `
    <td>${originalRoleType}</td>
    <td>${originalDate}</td>
    <td>${originalCheckIn}</td>
    <td>${originalCheckOut}</td>
    <td>${originalUserId}</td>
    <td>
      <button onclick="editAttendance(${id})">Edit</button>
      <button onclick="deleteAttendance(${id})">Delete</button>
    </td>
  `;
}

async function loadTeachers() {
    const res = await fetch("http://localhost:8000/api/teachers");
    const teachers = await res.json();
    const table = document.getElementById("teacherTable");
    table.innerHTML = "";

    teachers.forEach((t) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${t.name}</td>
      <td>${t.email}</td>
      <td>${t.phone}</td>
      <td>${t.address}</td>
      <td>${t.qualification}</td>
      <td>
        <button onclick="editTeacher(${t.id})">Edit</button>
        <button onclick="deleteTeacher(${t.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

async function deleteTeacher(id) {
    if (!confirm("Delete this teacher?")) return;
    const res = await fetch(`http://localhost:8000/api/teachers/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadTeachers();
}

function editTeacher(id) {
    const row = [...document.querySelectorAll("#teacherTable tr")].find((tr) =>
        tr.innerHTML.includes(`editTeacher(${id})`)
    );

    const nameCell = row.children[0];
    const emailCell = row.children[1];
    const phone_noCell = row.children[2];
    const addressCell = row.children[3];
    const qualificationCell = row.children[4];
    const actionsCell = row.children[5];

    const currentName = nameCell.textContent;
    const currentEmail = emailCell.textContent;
    const currentPhone = phone_noCell.textContent;
    const currentAddress = addressCell.textContent;
    const currentQualification = qualificationCell.textContent;

    nameCell.innerHTML = `<input type="text" value="${currentName}" id="edit-name-${id}" />`;
    emailCell.innerHTML = `<input type="email" value="${currentEmail}" id="edit-email-${id}" />`;
    phone_noCell.innerHTML = `<input type="text" value="${currentPhone}" id="edit-phone_no-${id}" />`;
    addressCell.innerHTML = `<input type="text" value="${currentAddress}" id="edit-address-${id}" />`;
    qualificationCell.innerHTML = `<input type="text" value="${currentQualification}" id="edit-qualification-${id}" />`;
    actionsCell.innerHTML = `
    <button onclick="saveTeacher(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentName}', '${currentEmail}', '${currentPhone}', '${currentAddress}, '${currentQualification}'')">Cancel</button>
  `;
}

async function saveTeacher(id) {
    const name = document.getElementById(`edit-name-${id}`).value;
    const email = document.getElementById(`edit-email-${id}`).value;
    const phone = document.getElementById(`edit-phone_no-${id}`).value;
    const address = document.getElementById(`edit-address-${id}`).value;
    const qualification = document.getElementById(
        `edit-qualification-${id}`
    ).value;

    const res = await fetch(`http://localhost:8000/api/teachers/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, address, qualification }),
    });

    if (res.ok) {
        alert("Teacher updated successfully");
        loadTeachers();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(
    id,
    originalName,
    originalEmail,
    originalPhone_no,
    originalAddress,
    originalQualification
) {
    const row = [...document.querySelectorAll("#teacherTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveTeacher(${id})`)
    );

    row.innerHTML = `
    <td>${originalName}</td>
    <td>${originalEmail}</td>
    <td>${originalPhone_no}</td>
    <td>${originalAddress}</td>
    <td>${originalQualification}</td>
    <td>
      <button onclick="editTeacher(${id})">Edit</button>
      <button onclick="deleteTeacher(${id})">Delete</button>
    </td>
  `;
}

document.getElementById("openFormBtn").addEventListener("click", async () => {
    const [teachers, classes, courses] = await Promise.all([
        fetch("/api/teachers").then((res) => res.json()),
        fetch("/api/classes").then((res) => res.json()),
        fetch("/api/courses").then((res) => res.json()),
    ]);

    const teacherSelect = document.getElementById("teacherSelect");
    const classSelect = document.getElementById("classSelect");
    const courseSelect = document.getElementById("courseSelect");

    teacherSelect.innerHTML = `<option value="">Select Teacher</option>`;
    classSelect.innerHTML = `<option value="">Select Class</option>`;
    courseSelect.innerHTML = `<option value="">Select Course</option>`;

    teachers.forEach((t) => {
        teacherSelect.innerHTML += `<option value="${t.id}">${t.name}</option>`;
    });
    classes.forEach((c) => {
        classSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
    courses.forEach((c) => {
        courseSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
});

document
    .getElementById("assignmentForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const teacherId = document.getElementById("teacherSelect").value;
        const classId = document.getElementById("classSelect").value;
        const courseId = document.getElementById("courseSelect").value;

        await fetch("/api/assign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ teacherId, classId, courseId }),
        });

        loadAssignments();
    });

async function loadAssignments() {
    const assignments = await fetch("/api/assignments").then((res) =>
        res.json()
    );
    const table = document.getElementById("assignmentTable");
    table.innerHTML = "";

    assignments.forEach((a) => {
        table.innerHTML += `
      <tr>
        <td>${a.teacher_name}</td>
        <td>${a.class_name}</td>
        <td>${a.course_name}</td>
      </tr>
    `;
    });
}

loadAssignments();

let classList = [];
async function loadStudents() {
    if (classList.length === 0) {
        const res = await fetch("http://localhost:8000/api/classes");
        classList = await res.json();
    }

    const res = await fetch("http://localhost:8000/api/students");
    const students = await res.json();
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((s) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${s.roll_no}</td>
      <td>${s.name}</td>
      <td>${s.email}</td>
      <td>${s.phone}</td>
      <td>${s.address}</td>
        <td>${getClassNameById(s.class_id)}</td>
      <td>
        <button onclick="editStudent(${s.id})">Edit</button>
        <button onclick="deleteStudent(${s.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

function getClassNameById(id) {
    const cls = classList.find((c) => c.id === id);
    return cls ? cls.name : "N/A";
}

async function deleteStudent(id) {
    if (!confirm("Delete this student?")) return;
    const res = await fetch(`http://localhost:8000/api/students/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadStudents();
}

function editStudent(id) {
    const row = [...document.querySelectorAll("#studentTable tr")].find((tr) =>
        tr.innerHTML.includes(`editStudent(${id})`)
    );

    const rollNoCell = row.children[0];
    const nameCell = row.children[0];
    const emailCell = row.children[1];
    const phone_noCell = row.children[2];
    const addressCell = row.children[3];
    const userIdCell = row.children[4];
    const classIdCell = row.children[5];
    const actionsCell = row.children[6];

    const currentRollNo = rollNoCell.textContent;
    const currentName = nameCell.textContent;
    const currentEmail = emailCell.textContent;
    const currentPhone = phone_noCell.textContent;
    const currentAddress = addressCell.textContent;
    const currentUserId = userIdCell.textContent;
    const currentClassId =
        classList.find((c) => c.name === classIdCell.textContent)?.id || "";

    const classOptions = classList
        .map(
            (c) =>
                `<option value="${c.id}" ${
                    c.id == currentClassId ? "selected" : ""
                }>${c.name}</option>`
        )
        .join("");

    rollNoCell.innerHTML = `<input type="text" value="${currentRollNo}" id="edit-roll_no-${id}" />`;
    nameCell.innerHTML = `<input type="text" value="${currentName}" id="edit-name-${id}" />`;
    emailCell.innerHTML = `<input type="email" value="${currentEmail}" id="edit-email-${id}" />`;
    phone_noCell.innerHTML = `<input type="text" value="${currentPhone}" id="edit-phone_no-${id}" />`;
    addressCell.innerHTML = `<input type="text" value="${currentAddress}" id="edit-address-${id}" />`;
    userIdCell.innerHTML = `<input type="text" value="${currentUserId}" id="edit-user_id-${id}" />`;
    classIdCell.innerHTML = `<select id="edit-class_id-${id}">${classOptions}</select>`;
    actionsCell.innerHTML = `
    <button onclick="saveStudent(${id})">Save</button>
    <button onclick="cancelEdit(${id},${currentRollNo}, '${currentName}', '${currentEmail}, ${currentPhone}, ${currentAddress}')">Cancel</button>
  `;
}

async function saveStudent(id) {
    const rollNo = document.getElementById(`edit-roll_no-${id}`).value;
    const name = document.getElementById(`edit-name-${id}`).value;
    const email = document.getElementById(`edit-email-${id}`).value;
    const phone = document.getElementById(`edit-phone_no-${id}`).value;
    const address = document.getElementById(`edit-address-${id}`).value;
    const user_id = document.getElementById(`edit-user_id-${id}`).value;
    const class_id = document.getElementById(`edit-class_id-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/students/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rollNo,
            name,
            email,
            phone,
            address,
            user_id,
            class_id,
        }),
    });

    if (res.ok) {
        alert("student updated successfully");
        loadStudents();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(
    id,
    originalRollNo,
    originalName,
    originalEmail,
    originalPhone_no,
    originalAddress,
    originalUserId,
    originalClassId,
) {
    const row = [...document.querySelectorAll("#studentTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveStudent(${id})`)
    );

    row.innerHTML = `
    <td>${originalRollNo}</td>
    <td>${originalName}</td>
    <td>${originalEmail}</td>
    <td>${originalPhone_no}</td>
    <td>${originalAddress}</td>
    <td>${originalUserId}</td>
    <td>${getClassNameById(originalClassId)}</td>
    <td>
      <button onclick="editStudent(${id})">Edit</button>
      <button onclick="deleteStudent(${id})">Delete</button>
    </td>
  `;
}

document.getElementById("openFormBtn").addEventListener("click", async () => {
    const [students, classes, courses] = await Promise.all([
        fetch("/api/students").then((res) => res.json()),
        fetch("/api/classes").then((res) => res.json()),
        fetch("/api/courses").then((res) => res.json()),
    ]);

    const studentSelect = document.getElementById("studentSelect");
    const classSelect = document.getElementById("classSelect");
    const courseSelect = document.getElementById("courseSelect");

    studentSelect.innerHTML = `<option value="">Select Student</option>`;
    classSelect.innerHTML = `<option value="">Select Class</option>`;
    courseSelect.innerHTML = `<option value="">Select Course</option>`;

    students.forEach((s) => {
        studentSelect.innerHTML += `<option value="${s.id}">${s.name}</option>`;
    });
    classes.forEach((c) => {
        classSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
    courses.forEach((c) => {
        courseSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
});

document
    .getElementById("assignmentForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const studentId = document.getElementById("studentSelect").value;
        const classId = document.getElementById("classSelect").value;
        const courseId = document.getElementById("courseSelect").value;

        await fetch("/api/assign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentId, classId, courseId }),
        });

        loadAssignments();
    });

async function loadAssignments() {
    const assignments = await fetch("/api/assignments").then((res) =>
        res.json()
    );
    const table = document.getElementById("assignmentTable");
    table.innerHTML = "";

    assignments.forEach((a) => {
        table.innerHTML += `
      <tr>
        <td>${a.Student}</td>
        <td>${a.Class}</td>
        <td>${a.Course}</td>
      </tr>
    `;
    });
}

loadAssignments();

document.getElementById("roleForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const clas = {
        name: form.name.value,
    };

    const res = await fetch("http://localhost:8000/api/roles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clas),
    });

    const data = await res.json();
    if (res.ok) {
        alert("Role added!");
        form.reset();
        loadRole();
    } else {
        alert(data.message || "Error adding Role");
    }
});

async function loadRole() {
    const res = await fetch("http://localhost:8000/api/roles");
    const clas = await res.json();
    const table = document.getElementById("roleTable");
    table.innerHTML = "";

    clas.forEach((r) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${r.name}</td>
      <td>
        <button onclick="editRole(${r.id})">Edit</button>
        <button onclick="deleteRole(${r.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

async function deleteRole(id) {
    if (!confirm("Delete this Role?")) return;
    const res = await fetch(`http://localhost:8000/api/roles/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadRole();
}

function editRole(id) {
    const row = [...document.querySelectorAll("#roleTable tr")].find((tr) =>
        tr.innerHTML.includes(`editRole(${id})`)
    );

    const nameCell = row.children[0];
    const actionsCell = row.children[1];

    const currentName = nameCell.textContent;
    nameCell.innerHTML = `<input type="text" value="${currentName}" id="edit-name-${id}" />`;
    actionsCell.innerHTML = `
    <button onclick="saveRole(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentName}', '${currentEmail}')">Cancel</button>
  `;
}

async function saveRole(id) {
    const name = document.getElementById(`edit-name-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/roles/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
    });

    if (res.ok) {
        alert("Role updated successfully");
        loadRole();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(id, originalName, originalEmail) {
    const row = [...document.querySelectorAll("#roleTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveRole(${id})`)
    );

    row.innerHTML = `
    <td>${originalName}</td>
    <td>
      <button onclick="editRole(${id})">Edit</button>
      <button onclick="deleteRole(${id})">Delete</button>
    </td>
  `;
}

document.getElementById("openFormBtn").addEventListener("click", async () => {
    const [roles, permissions] = await Promise.all([
        fetch("/api/roles").then((res) => res.json()),
        fetch("/api/permissions").then((res) => res.json()),
    ]);

    const roleSelect = document.getElementById("roleSelect");
    const permissionSelect = document.getElementById("permissionSelect");

    roleSelect.innerHTML = `<option value="">Select Role_id</option>`;
    permissionSelect.innerHTML = `<option value="">Select Permission_id</option>`;

    roles.forEach((s) => {
        studentSelect.innerHTML += `<option value="${s.id}">${s.name}</option>`;
    });
    permissions.forEach((c) => {
        classSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
});

document
    .getElementById("assignmentForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const roleId = document.getElementById("roleSelect").value;
        const permissionId = document.getElementById("permissionSelect").value;

        await fetch("/api/assign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roleId, permissionId }),
        });

        loadAssignments();
    });

async function loadAssignments() {
    const assignments = await fetch("/api/assignments").then((res) =>
        res.json()
    );
    const table = document.getElementById("assignmentTable");
    table.innerHTML = "";

    assignments.forEach((a) => {
        table.innerHTML += `
      <tr>
        <td>${a.Role_id}</td>
        <td>${a.Permission_id}</td>
      </tr>
    `;
    });
}

loadAssignments();

document.getElementById("courseForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const course = {
        name: form.name.value,
        description: form.description.value,
        credit_hours: form.credit_hours.value,
    };

    const res = await fetch("http://localhost:8000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
    });

    const data = await res.json();
    if (res.ok) {
        alert("Course added!");
        form.reset();
        loadCourses();
    } else {
        alert(data.message || "Error adding Course");
    }
});

async function loadCourses() {
    const res = await fetch("http://localhost:8000/api/courses");
    const courses = await res.json();
    const table = document.getElementById("courseTable");
    table.innerHTML = "";

    courses.forEach((c) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${c.name}</td
      <td>${c.description}</td>
      <td>${c.credit_hours}</td>
      <td>
        <button onclick="editCourse(${c.id})">Edit</button>
        <button onclick="deleteCourse(${c.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

async function deleteCourse(id) {
    if (!confirm("Delete this course?")) return;
    const res = await fetch(`http://localhost:8000/api/courses/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadCourses();
}

function editCourse(id) {
    const row = [...document.querySelectorAll("#courseTable tr")].find((tr) =>
        tr.innerHTML.includes(`editCourse(${id})`)
    );

    const nameCell = row.children[0];
    const descriptionCell = row.children[1];
    const credit_hoursCell = row.children[2];
    const actionsCell = row.children[3];

    const currentName = nameCell.textContent;
    const currentDescription = descriptionCell.textContent;
    const currentCreditHours = credit_hoursCell.textContent;

    nameCell.innerHTML = `<input type="text" value="${currentName}" id="edit-name-${id}" />`;
    descriptionCell.innerHTML = `<input type="email" value="${currentDescription}" id="edit-description-${id}" />`;
    credit_hoursCell.innerHTML = `<input type="email" value="${currentCreditHours}" id="edit-credit_hours-${id}" />`;
    actionsCell.innerHTML = `
    <button onclick="saveCourse(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentName}', '${currentDescription},  '${currentCreditHours}')">Cancel</button>
  `;
}

async function saveCourse(id) {
    const name = document.getElementById(`edit-name-${id}`).value;
    const description = document.getElementById(`edit-description-${id}`).value;
    const creditHours = document.getElementById(
        `edit-credit_hours-${id}`
    ).value;

    const res = await fetch(`http://localhost:8000/api/courses/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, description, creditHours }),
    });

    if (res.ok) {
        alert("Course updated successfully");
        loadCourses();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(
    id,
    originalName,
    originalDescription,
    originalCreditHours
) {
    const row = [...document.querySelectorAll("#courseTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveCourse(${id})`)
    );

    row.innerHTML = `
    <td>${originalName}</td>
    <td>${originalDescription}</td>
    <td>${originalCreditHours}</td>
    <td>
      <button onclick="editCourse(${id})">Edit</button>
      <button onclick="deleteCourse(${id})">Delete</button>
    </td>
  `;
}

document.getElementById("classForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const clas = {
        name: form.name.value,
    };

    const res = await fetch("http://localhost:8000/api/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clas),
    });

    const data = await res.json();
    if (res.ok) {
        alert("Class added!");
        form.reset();
        loadClass();
    } else {
        alert(data.message || "Error adding Class");
    }
});

let roadmapList = [];
async function loadClass() {
    if (roadmapList.length === 0) {
        const res = await fetch("http://localhost:8000/api/roadmaps");
        roadmapList = await res.json();
    }

    const res = await fetch("http://localhost:8000/api/classes");
    const clas = await res.json();
    const table = document.getElementById("classTable");
    table.innerHTML = "";

    clas.forEach((c) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${c.name}</td>
      <td>${getRoadmapNameById(c.roadmap_id)}</td>
      <td>
        <button onclick="editClass(${c.id})">Edit</button>
        <button onclick="deleteClass(${c.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

function getRoadmapNameById(id) {
    const roadmap = roadmapList.find((r) => r.id === id);
    return roadmap ? roadmap.name : "N/A";
}

async function deleteClass(id) {
    if (!confirm("Delete this class?")) return;
    const res = await fetch(`http://localhost:8000/api/classes/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadClass();
}

function editClass(id) {
    const row = [...document.querySelectorAll("#classTable tr")].find((tr) =>
        tr.innerHTML.includes(`editClass(${id})`)
    );

    const nameCell = row.children[0];
    const roadmapIdCell = row.children[1];
    const actionsCell = row.children[2];

    const currentName = nameCell.textContent;
    const currentRoadmapId =
        roadmapList.find((r) => r.name === roadmapIdCell.textContent)?.id || "";

    const roadmapOptions = roadmapList
        .map(
            (r) =>
                `<option value="${r.id}" ${
                    r.id == currentRoadmapId ? "selected" : ""
                }>${r.title}</option>`
        )
        .join("");

    nameCell.innerHTML = `<input type="text" value="${currentName}" id="edit-name-${id}" />`;
    roadmapIdCell.innerHTML = `
  <select id="edit-roadmap_id-${id}" required>
    ${roadmapOptions}
  </select>`;
    actionsCell.innerHTML = `
    <button onclick="saveClass(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentName}')">Cancel</button>
  `;
}

async function saveClass(id) {
    const name = document.getElementById(`edit-name-${id}`).value;
    const roadmap_id = document.getElementById(`edit-roadmap_id-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/classes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, roadmap_id }),
    });

    if (res.ok) {
        alert("Class updated successfully");
        loadClass();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(id, originalName, originalRoadmapId) {
    const row = [...document.querySelectorAll("#classTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveClass(${id})`)
    );

    row.innerHTML = `
    <td>${originalName}</td>
    <td>${getRoadmapNameById(originalRoadmapId)}</td>
    <td>
      <button onclick="editClass(${id})">Edit</button>
      <button onclick="deleteClass(${id})">Delete</button>
    </td>
  `;
}

document.getElementById("openFormBtn").addEventListener("click", async () => {
    const [classes, courses, roadmaps] = await Promise.all([
        fetch("/api/classes").then((res) => res.json()),
        fetch("/api/courses").then((res) => res.json()),
        fetch("/api/roadmaps").then((res) => res.json()),
    ]);

    const classSelect = document.getElementById("classSelect");
    const courseSelect = document.getElementById("courseSelect");
    const roadmapSelect = document.getElementById("roadmapSelect");

    classSelect.innerHTML = `<option value="">Select Class</option>`;
    courseSelect.innerHTML = `<option value="">Select Course</option>`;
    roadmapSelect.innerHTML = `<option value="">Select Roadmap</option>`;

    classes.forEach((c) => {
        classSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
    courses.forEach((c) => {
        courseSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
    roadmaps.forEach((r) => {
        roadmapSelect.innerHTML += `<option value="${r.id}">${r.name}</option>`;
    });
});

document
    .getElementById("assignmentForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const classId = document.getElementById("classSelect").value;
        const courseId = document.getElementById("courseSelect").value;
        const roadmapId = document.getElementById("roadmapSelect").value;

        await fetch("/api/assign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ classId, courseId, roadmapId }),
        });

        loadAssignments();
    });

async function loadAssignments() {
    const assignments = await fetch("/api/assignments").then((res) =>
        res.json()
    );
    const table = document.getElementById("assignmentTable");
    table.innerHTML = "";

    assignments.forEach((a) => {
        table.innerHTML += `
      <tr>
        <td>${a.Class}</td>
        <td>${a.Course}</td>
        <td>${a.Roadmap}</td>
      </tr>
    `;
    });
}

loadAssignments();

document.getElementById("roadmapForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const roadmap = {
        title: form.title.value,
        description: form.description.value,
    };

    const res = await fetch("http://localhost:8000/api/roadmaps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(roadmap),
    });

    const data = await res.json();
    if (res.ok) {
        alert("Roadmap added!");
        form.reset();
        loadRoadmaps();
    } else {
        alert(data.message || "Error adding Roadmap");
    }
});

async function loadRoadmaps() {
    const res = await fetch("http://localhost:8000/api/roadmaps");
    const roadmaps = await res.json();
    const table = document.getElementById("roadmapTable");
    table.innerHTML = "";

    roadmaps.forEach((r) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${r.title}</td>
      <td>${r.description}</td>
      <td>
        <button onclick="editRoadmap(${r.id})">Edit</button>
        <button onclick="deleteRoadmap(${r.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

async function deleteRoadmap(id) {
    if (!confirm("Delete this Roadmap?")) return;
    const res = await fetch(`http://localhost:8000/api/roadmaps/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadRoadmaps();
}

function editRoadmap(id) {
    const row = [...document.querySelectorAll("#roadmapTable tr")].find((tr) =>
        tr.innerHTML.includes(`editRoadmap(${id})`)
    );

    const titleCell = row.children[0];
    const descriptionCell = row.children[1];
    const actionsCell = row.children[2];

    const currentTitle = titleCell.textContent;
    const currentDescription = descriptionCell.textContent;

    titleCell.innerHTML = `<input type="text" value="${currentTitle}" id="edit-title-${id}" />`;
    descriptionCell.innerHTML = `<input type="email" value="${currentDescription}" id="edit-description-${id}" />`;
    actionsCell.innerHTML = `
    <button onclick="saveRoadmap(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentTitle}', '${currentDescription}')">Cancel</button>
  `;
}

async function saveRoadmap(id) {
    const title = document.getElementById(`edit-title-${id}`).value;
    const description = document.getElementById(`edit-description-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/roadmaps/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
        alert("Roadmap updated successfully");
        loadRoadmaps();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(id, originalTitle, originalDescription) {
    const row = [...document.querySelectorAll("#roadmapTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveRoadmap(${id})`)
    );

    row.innerHTML = `
    <td>${originalTitle}</td>
    <td>${originalDescription}</td>
    <td>
      <button onclick="editRoadmap(${id})">Edit</button>
      <button onclick="deleteRoadmap(${id})">Delete</button>
    </td>
  `;
}

document.getElementById("openFormBtn").addEventListener("click", async () => {
    const [roadmaps, courses] = await Promise.all([
        fetch("/api/roadmaps").then((res) => res.json()),
        fetch("/api/courses").then((res) => res.json()),
    ]);

    const roadmapSelect = document.getElementById("roadmapSelect");
    const courseSelect = document.getElementById("courseSelect");

    roadmapSelect.innerHTML = `<option value="">Select Roadmap</option>`;
    courseSelect.innerHTML = `<option value="">Select Course</option>`;

    roadmaps.forEach((r) => {
        classSelect.innerHTML += `<option value="${r.id}">${r.title}</option>`;
    });
    courses.forEach((c) => {
        courseSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
});

document
    .getElementById("assignmentForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const roadmapId = document.getElementById("roadmapSelect").value;
        const courseId = document.getElementById("courseSelect").value;

        await fetch("/api/assign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roadmapId, courseId }),
        });

        loadAssignments();
    });

async function loadAssignments() {
    const assignments = await fetch("/api/assignments").then((res) =>
        res.json()
    );
    const table = document.getElementById("assignmentTable");
    table.innerHTML = "";

    assignments.forEach((a) => {
        table.innerHTML += `
      <tr>
        <td>${a.Roadmap}</td>
        <td>${a.Course}</td>
      </tr>
    `;
    });
}

loadAssignments();

document.getElementById("topicForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = {
        title: form.title.value,
        description: form.description.value,
        roadmap_id: document.getElementById("roadmapSelect").value,
        course_id: document.getElementById("courseSelect").value,
    };

    const res = await fetch("http://localhost:8000/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(topic),
    });

    const data = await res.json();
    if (res.ok) {
        alert("Topic added!");
        form.reset();
        loadTopics();
    } else {
        alert(data.message || "Error adding Topic");
    }
});

roadmapList = [];
let courseList = [];

async function loadTopics() {
    if (roadmapList.length === 0) {
        const res = await fetch("http://localhost:8000/api/roadmaps");
        roadmapList = await res.json();
    }
    if (courseList.length === 0) {
        const res = await fetch("http://localhost:8000/api/courses");
        courseList = await res.json();
    }

    const res = await fetch("http://localhost:8000/api/topics");
    const topics = await res.json();
    const table = document.getElementById("topicTable");
    table.innerHTML = "";

    topics.forEach((t) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${t.title}</td>
      <td>${t.description}</td>
      <td>${getRoadmapNameById(t.roadmap_id)}</td>
      <td>${getCourseNameById(t.course_id)}</td>
      <td>
        <button onclick="editTopic(${t.id})">Edit</button>
        <button onclick="deleteTopic(${t.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

function getRoadmapNameById(id) {
    const roadmap = roadmapList.find((r) => r.id === id);
    return roadmap ? roadmap.name : "N/A";
}

function getCourseNameById(id) {
    const course = courseList.find((c) => c.id === id);
    return course ? course.name : "N/A";
}

async function deleteTopic(id) {
    if (!confirm("Delete this Topic?")) return;
    const res = await fetch(`http://localhost:8000/api/topics/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadTopics();
}

function editTopic(id) {
    const row = [...document.querySelectorAll("#topicTable tr")].find((tr) =>
        tr.innerHTML.includes(`editTopic(${id})`)
    );

    const titleCell = row.children[0];
    const descriptionCell = row.children[1];
    const roadmapIdCell = row.children[2];
    const courseIdCell = row.children[3];
    const actionsCell = row.children[4];

    const currentTitle = titleCell.textContent;
    const currentDescription = descriptionCell.textContent;
    const currentRoadmapId =
        roadmapList.find((r) => r.name === roadmapIdCell.textContent)?.id || "";
    const currentCourseId =
        courseList.find((c) => c.name === courseIdCell.textContent)?.id || "";

    const roadmapOptions = roadmapList
        .map(
            (r) =>
                `<option value="${r.id}" ${
                    r.id == currentRoadmapId ? "selected" : ""
                }>${r.title}</option>`
        )
        .join("");

    const courseOptions = courseList
        .map(
            (c) =>
                `<option value="${c.id}" ${
                    c.id == currentCourseId ? "selected" : ""
                }>${c.name}</option>`
        )
        .join("");

    titleCell.innerHTML = `<input type="text" value="${currentTitle}" id="edit-title-${id}" />`;
    descriptionCell.innerHTML = `<input type="text" value="${currentDescription}" id="edit-description-${id}" />`;
    roadmapIdCell.innerHTML = `<select id="edit-roadmap_id-${id}">${roadmapOptions}</select>`;
    courseIdCell.innerHTML = `<select id="edit-course_id-${id}">${courseOptions}</select>`;

    actionsCell.innerHTML = `
    <button onclick="saveTopic(${id})">Save</button>
    <button onclick="cancelEdit(${id}, '${currentTitle}', '${currentDescription}', '${currentRoadmapId}', '${currentCourseId}')">Cancel</button>
  `;
}

async function saveTopic(id) {
    const title = document.getElementById(`edit-title-${id}`).value;
    const description = document.getElementById(`edit-description-${id}`).value;
    const roadmap_id = document.getElementById(`edit-roadmap_id-${id}`).value;
    const course_id = document.getElementById(`edit-course_id-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/topics/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, roadmap_id, course_id }),
    });

    if (res.ok) {
        alert("Topic updated successfully");
        loadTopics();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(
    id,
    originalTitle,
    originalDescription,
    originalRoadmapId,
    originalCourseId
) {
    const row = [...document.querySelectorAll("#topicTable tr")].find((tr) =>
        tr.innerHTML.includes(`saveTopic(${id})`)
    );

    row.innerHTML = `
    <td>${originalTitle}</td>
    <td>${originalDescription}</td>
    <td>${getRoadmapNameById(originalRoadmapId)}</td>
    <td>${getCourseNameById(originalCourseId)}</td>
    <td>
      <button onclick="editTopic(${id})">Edit</button>
      <button onclick="deleteTopic(${id})">Delete</button>
    </td>
  `;
}

document
    .getElementById("permissionForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();
        const form = e.target;
        const permission = {
            name: form.name.value,
            description: form.description.value,
        };

        const res = await fetch("http://localhost:8000/api/permissions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(permission),
        });

        const data = await res.json();
        if (res.ok) {
            alert("Permission added!");
            form.reset();
            loadPermission();
        } else {
            alert(data.message || "Error adding Permission");
        }
    });

async function loadPermission() {
    const res = await fetch("http://localhost:8000/api/permissions");
    const permission = await res.json();
    const table = document.getElementById("permissionTable");
    table.innerHTML = "";

    permission.forEach((p) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.description}</td>
      <td>
        <button onclick="editPermission(${p.id})">Edit</button>
        <button onclick="deletePermission(${p.id})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

async function deletePermission(id) {
    if (!confirm("Delete this permission?")) return;
    const res = await fetch(`http://localhost:8000/api/permissions/${id}`, {
        method: "DELETE",
    });
    if (res.ok) loadPermission();
}

function editPermission(id) {
    const row = [...document.querySelectorAll("#permissionTable tr")].find(
        (tr) => tr.innerHTML.includes(`editPermission(${id})`)
    );

    const nameCell = row.children[0];
    const descriptionCell = row.children[1];
    const actionsCell = row.children[2];

    const currentName = nameCell.textContent;
    const currentDescription = descriptionCell.textContent;

    nameCell.innerHTML = `<input type="text" value="${currentName}" id="edit-name-${id}" />`;
    descriptionCell.innerHTML = `<input type="text" value="${currentDescription}" id="edit-description-${id}" />`;
    actionsCell.innerHTML = `
    <button onclick="savePermission(${id})">Save</button>
    <button onclick="cancelPermission(${id}, '${currentName}', '${currentDescription}')">Cancel</button>
  `;
}

async function savePermission(id) {
    const name = document.getElementById(`edit-name-${id}`).value;
    const description = document.getElementById(`edit-description-${id}`).value;

    const res = await fetch(`http://localhost:8000/api/permissions/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
    });

    if (res.ok) {
        alert("Permission updated successfully");
        loadPermission();
    } else {
        const data = await res.json();
        alert(data.message || "Failed to update");
    }
}

function cancelEdit(id, originalName, originalDescription) {
    const row = [...document.querySelectorAll("#classTable tr")].find((tr) =>
        tr.innerHTML.includes(`savePermission(${id})`)
    );

    row.innerHTML = `
    <td>${originalName}</td>
    <td>${originalDescription}</td>
    <td>
      <button onclick="editPermission(${id})">Edit</button>
      <button onclick="deletePermission(${id})">Delete</button>
    </td>
  `;
}
