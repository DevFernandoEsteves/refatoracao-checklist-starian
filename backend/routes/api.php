<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

Route::group(['prefix' => 'todo'], function () {
    Route::get('/list', [TodoController::class, 'index']);
    Route::get('/creare', [TodoController::class, 'store']);
    Route::get('/delete/{id}', [TodoController::class, 'destroy']);

    Route::group(['prefix' => 'problem-CSRF-token'], function () {
        Route::post('/', [TodoController::class, 'store']);
        Route::delete('/{id}', [TodoController::class, 'destroy']);
    });
});


