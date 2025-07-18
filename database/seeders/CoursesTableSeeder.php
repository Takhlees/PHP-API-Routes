<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      DB::table('courses')->insert([
    ['name' => 'Mathematics', 'description' => 'Algebra, Trigonometry', 'credit_hours' => '3'],
    ['name' => 'Biology', 'description' => 'Cell, Genetics', 'credit_hours' => '4'],
]);

    }
}
