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
        $user = new \App\User();
        $user->name = "Admin";
        $user->email = "ad@min.com";
        $user->password = bcrypt("1");
        $user->save();
    }
}
