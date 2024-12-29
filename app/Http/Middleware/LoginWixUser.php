<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use StoresSuite\Wix\Wix;
use Symfony\Component\HttpFoundation\Response;

class LoginWixUser
{
    public function __construct(
        private Wix $wix,
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
            $wixSite = $this->wix->site()->findByInstance($request->instance);
            $user = $this->user->query()->where('email', $wixSite->_id)->first();
            if (!$user) {
                return redirect()->route('wix.install');
            }
            Auth::login($user);
        }

        return $next($request);
    }
}
