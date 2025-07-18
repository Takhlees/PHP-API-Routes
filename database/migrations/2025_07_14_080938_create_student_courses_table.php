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
        Schema::create('student_courses', function (Blueprint $table) {
            $table->id();
             $table->unsignedBigInteger('student_id')->index();;
            $table->foreign('student_id', 'student_id_foreign')->references('id')->on('students')->onDelete('cascade');
            $table->unsignedBigInteger('course_id')->index();;
            $table->foreign('course_id', 'student_courses_course_id_foreign')->references('id')->on('courses')->onDelete('cascade');
            $table->unique(['student_id', 'course_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_courses');
    }
};
