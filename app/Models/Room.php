<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Room extends Model
{
    public $timestamps = false;

    protected $fillable = [
      'name','creator_id'
    ];

    public function users(){
        return $this->belongsToMany(User::class,'user_rooms','room_id','user_id');
    }
}
