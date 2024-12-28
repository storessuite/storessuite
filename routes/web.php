<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
