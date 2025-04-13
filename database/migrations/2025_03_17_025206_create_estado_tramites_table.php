<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('estados_tramite', function (Blueprint $table) {
            $table->id();
            $table->string('estado')->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('estados_tramite');
    }
};

