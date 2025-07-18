<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teacher_courses', function (Blueprint $table) {
            $table->id();
             $table->unsignedBigInteger('course_id')->index();;
            $table->foreign('course_id', 'teacher_courses_course_id_foreign')->references('id')->on('courses')->onDelete('cascade');

             $table->unsignedBigInteger('teacher_id')->index();;
            $table->foreign('teacher_id', 'teacher_courses_teacher_id_foreign')->references('id')->on('teachers')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teacher_courses');
    }
};
