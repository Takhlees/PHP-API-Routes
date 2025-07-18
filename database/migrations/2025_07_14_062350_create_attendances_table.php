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
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->string('role_type')->index();
            $table->date('date')->index();
            $table->time('check_in', precision: 0);
            $table->time('check_out', precision: 0);
            $table->unsignedBigInteger('user_id')->index();
            $table->foreign('user_id', 'attendances_user_id_foreign')->references('id')->on('users')->onDelete('cascade');
            $table->unique(['user_id', 'date']); 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendances');
    }
};
