<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

Route::resource('todo', TodoController::class);
