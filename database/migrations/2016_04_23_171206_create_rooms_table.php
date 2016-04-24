<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('creator_id')->index()->unsigned();
            $table->foreign('creator_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('user_rooms', function (Blueprint $table) {
            $table->integer('user_id')->index()->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('room_id')->index()->unsigned();
            $table->foreign('room_id')->references('id')->on('rooms')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_rooms', function(Blueprint $table) {
            $table->dropForeign('user_rooms_user_id_foreign');
            $table->dropForeign('user_rooms_room_id_foreign');
        });
        Schema::drop('user_rooms');

        Schema::table('rooms', function(Blueprint $table) {
            $table->dropForeign('rooms_creator_id_foreign');
        });
        Schema::drop('rooms');

    }
}
