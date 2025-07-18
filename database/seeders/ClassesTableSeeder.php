<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('classes')->insert([
    ['name' => '9th Grade', 'roadmap_id' => 5],
    ['name' => '10th Grade', 'roadmap_id' => 6],
]);

    }
}
