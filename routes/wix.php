<?php

use App\Http\Controllers\WixController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('oauth/complete', [WixController::class, 'complete']);
});
