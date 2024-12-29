<?php

use App\Http\Controllers\WixController;
use Illuminate\Support\Facades\Route;

Route::prefix('wix')->group(function () {
    Route::get('oauth/complete', [WixController::class, 'complete'])->name('oauth.complete');
});
