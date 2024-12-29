<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use StoresSuite\Wix\Services\WixSiteService;
use Symfony\Component\HttpFoundation\Response;

class LoginWixUser
{
    public function __construct(
        private WixSiteService $wixSiteService,
        private User $user,
    ) {}

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->instance) {
            $wixSite = $this->wixSiteService->findByInstance($request->instance);
            $user = $this->user->query()->where('email', $wixSite->_id)->first();
            Auth::login($user);
        }

        return $next($request);
    }
}
