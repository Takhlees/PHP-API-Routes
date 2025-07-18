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
        Schema::create('class_teachers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('class_id')->index();;
            $table->foreign('class_id', 'classes_teacher_class_id_foreign')->references('id')->on('classes')->onDelete('cascade');
            $table->unsignedBigInteger('teacher_id')->index();;
            $table->foreign('teacher_id', 'teacher_id_foreign')->references('id')->on('teachers')->onDelete('cascade');
            $table->unique(['class_id', 'teacher_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_teachers');
    }
};
