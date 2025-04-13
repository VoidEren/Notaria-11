<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('envio_registro_publico', function (Blueprint $table) {
            $table->id();
            $table->foreignId('expediente_id')->constrained()->onDelete('cascade');
            $table->timestamp('fecha_envio')->useCurrent();
            $table->enum('estado', ['Enviado', 'Autorizado', 'Rechazado']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('envio_registro_publico');
    }
};

