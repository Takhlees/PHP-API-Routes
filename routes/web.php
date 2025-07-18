<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/dashboards/student', function () {
    return view('dashboards.student');
});

Route::get('/dashboards/teacher', function () {
    return view('dashboards.teacher');
});

Route::get('/dashboards/admin', function () {
    return view('dashboards.admin');
});


Route::get('/teachers', function () {
    return view('teachers');
});


Route::get('/students', function () {
    return view('students');
});


Route::get('/courses', function () {
    return view('courses');
});


Route::get('/classes', function () {
    return view('classes');
});


Route::get('/roadmaps', function () {
    return view('roadmaps');
});


Route::get('/topics', function () {
    return view('topics');
});


Route::get('/role_permissions', function () {
    return view('role_permissions');
});

