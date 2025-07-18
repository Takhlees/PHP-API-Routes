<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      DB::table('permissions')->insert([
    ['name' => 'create-post'],
    ['name' => 'edit-post'],
    ['name' => 'delete-post'],
]);

    }
}
