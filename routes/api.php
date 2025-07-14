<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/home', function () {
    return 'API';
});

Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->delete('/users/{id}', [AuthController::class, 'destroy']);

Route::middleware(['throttle:global-limit'])->group(function () {
    
    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::put('/users/{id}', [AuthController::class, 'update']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });

});
