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
        Schema::create('class_courses', function (Blueprint $table) {
            $table->id();
             $table->unsignedBigInteger('class_id')->index();;
            $table->foreign('class_id', 'class_courses_class_id_foreign')->references('id')->on('classes')->onDelete('cascade');
            $table->unsignedBigInteger('course_id')->index();;
            $table->foreign('course_id', 'class_courses_course_id_foreign')->references('id')->on('courses')->onDelete('cascade');
$table->unique(['class_id', 'course_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_courses');
    }
};
