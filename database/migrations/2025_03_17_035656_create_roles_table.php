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
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');  // Relación con users
            $table->string('name');  // Nombre del rol (ej. "Admin", "User")
            $table->timestamps();
        });
    }

    /**
     */
    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
