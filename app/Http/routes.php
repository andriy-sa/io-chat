<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/
Route::group(['middleware' => 'web'], function () {
    Route::get('/', function(){
        return view('app');
    });

    Route::group(['middleware' => 'auth','prefix' => 'api'],function(){
        Route::get('get_user','AngularController@getUser');
    });
    Route::get('api/check-guest',['middleware' => 'guest','uses' => function(){
        return response('success',200);
    }]);
    Route::get('api/get_me','AngularController@getUser');
    Route::post('login','Auth\AuthController@login');
    Route::post('reg','Auth\AuthController@register');

    Route::get('logout','Auth\AuthController@logout');
});
