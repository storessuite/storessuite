<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WixController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

/*
|--------------------------------------------------------------------------
| Routes related to Wix
|--------------------------------------------------------------------------
|
*/

Route::prefix('wix')
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get('oauth/complete', [WixController::class, 'complete'])->name('oauth.complete');
        Route::get('oauth/initiate', [WixController::class, 'initiate'])->name('oauth.initiate');
    });

/*
|--------------------------------------------------------------------------
| Stores Suite routes
|--------------------------------------------------------------------------
|
*/

Route::middleware(['auth', 'verified'])
    ->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    });
