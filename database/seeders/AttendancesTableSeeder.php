<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttendancesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::table('attendances')->insert([
    ['role_type' => 'student', 'date' => now(), 'check_in' => now(), 'check_out' => now(), 'user_id' => 1],
    ['role_type' => 'teacher', 'date' => now(), 'check_in' => now(), 'check_out' => now(), 'user_id' => 3],
]);

    }
}
