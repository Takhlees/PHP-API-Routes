<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentCoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('student_courses')->insert([
    ['student_id' => 1, 'course_id' => 1],
    ['student_id' => 1, 'course_id' => 2],
]);

    }
}
