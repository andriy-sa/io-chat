<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\Room;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Auth;

class AngularController extends Controller
{
    private $user = null;

    public function __construct(){
        $this->user = Auth::user();
    }
    public function getUser(Request $request)
    {
        return response()->json(['user'=>$request->user()],200);
    }

    public function get_messages(Request $request){
        $yesterday = Carbon::yesterday();
        $room_id = $request->get('room_id',0);
        $messages = Message::selectRaw('m.message, m.created_at ,u.name')
            ->from('messages as m')
            ->join('users as u','u.id','=','m.user_id')
            ->where('m.room_id',$room_id)
            ->where('m.created_at','>',$yesterday)
            ->orderBy('m.created_at','desc')
            ->get()
            ->toArray();

        return response()->json($messages,200);
    }

    public function get_rooms(){
        return $this->user->rooms;
    }

    public function find_room(Request $request){
        $id = $request->get('id',0);

        $room = Room::with('users')->find($id);
        if(!$room) {
            return response()->json('Room not found',404);
        }

        return response()->json($room,200);
    }

    public function new_message(Request $request){
        Message::create($request->all());

        return response('success',200);
    }

    public function new_room(Request $request){
        $room = new Room();
        $room->name = $request->get('name');
        $room->creator_id = $this->user->id;
        $room->save();

        $room->users()->attach($this->user->id);

        return response()->json($room,200);
    }
}
