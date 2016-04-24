<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\Models\User();
        $user->name = "Admin";
        $user->email = "ad@min.com";
        $user->password = bcrypt("1");
        $user->save();

        $user = new \App\Models\User();
        $user->name = "s_a";
        $user->email = "andriy_smolyar_0@mail.ru";
        $user->password = bcrypt("1");
        $user->save();
    }
}
