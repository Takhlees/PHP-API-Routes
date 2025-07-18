<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TopicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('topics')->insert([
    ['title' => 'Algebra', 'description' => 'Basic Algebra', 'roadmap_id' => 1, 'course_id' => 1],
    ['title' => 'Genetics', 'description' => 'DNA', 'roadmap_id' => 1, 'course_id' => 2],
]);

    }
}
