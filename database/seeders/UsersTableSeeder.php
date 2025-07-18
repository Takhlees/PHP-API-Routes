<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::table('users')->insert([
            [
                'name' => 'Test Admin',
                'email' => 'admin@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password'), // securely hashed
                'remember_token' => Str::random(10),
                'role_id' => 1, // assuming 1 = admin
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Test Teacher',
                'email' => 'teacher@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
                'role_id' => 2, // teacher
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Test Student',
                'email' => 'student@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
                'role_id' => 3, // student
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
