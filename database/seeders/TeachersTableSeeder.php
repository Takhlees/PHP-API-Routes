<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeachersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('teachers')->insert([
    ['qualification' => 'MSc Math', 'user_id' => 10],
    ['qualification' => 'MSc Physics', 'user_id' => 11],
]);

    }
}
