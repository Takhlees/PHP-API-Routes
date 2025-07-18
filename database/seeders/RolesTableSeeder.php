<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('roles')->insert([
            ['id' => 4, 'role_type' => 'admin', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 5, 'role_type' => 'teacher', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 6, 'role_type' => 'student', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
