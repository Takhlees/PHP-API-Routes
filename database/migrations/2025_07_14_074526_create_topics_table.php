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
        Schema::create('topics', function (Blueprint $table) {
            $table->id();
            $table->string('title')->index();;
            $table->text('description')->nullable();
            $table->unsignedBigInteger('roadmap_id')->index();;
            $table->foreign('roadmap_id', 'topics_roadmap_id_foreign')->references('id')->on('roadmaps')->onDelete('cascade');
            $table->unsignedBigInteger('course_id')->index();;
            $table->foreign('course_id', 'course_id_foreign')->references('id')->on('courses')->onDelete('cascade');
            $table->unique(['roadmap_id', 'course_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('topics');
    }
};
