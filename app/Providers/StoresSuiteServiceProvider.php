<?php

namespace App\Providers;

use App\Services\WixService;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use StoresSuite\Wix\Contracts\WixContract;

class StoresSuiteServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(WixContract::class, WixService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (env('FORCE_HTTPS', false)) {
            URL::forceScheme('https');
        }
    }
}
