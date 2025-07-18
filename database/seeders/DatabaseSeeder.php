<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       
          $this->call([
        RolesTableSeeder::class,
        UsersTableSeeder::class,
        RoadmapsTableSeeder::class,
        ClassesTableSeeder::class,
        TeachersTableSeeder::class,
        StudentsTableSeeder::class,
        CoursesTableSeeder::class,
        TopicsTableSeeder::class,
        PermissionsTableSeeder::class,
        RolePermissionsTableSeeder::class,
        AttendancesTableSeeder::class,
        StudentCoursesTableSeeder::class,
    ]);
    }
}
