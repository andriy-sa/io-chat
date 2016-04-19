<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class AngularController extends Controller
{
    public function getUser(Request $request)
    {
        return $request->user();
    }
}
