<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('expedientes', function (Blueprint $table) {
            $table->id();
            $table->string('cliente');
            $table->foreignId('departamento_id')->constrained()->onDelete('restrict');
            $table->foreignId('estado_tramite_id')->constrained('estados_tramite')->onDelete('restrict');
            $table->text('observaciones')->nullable();
            $table->boolean('completado')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('expedientes');
    }
};

