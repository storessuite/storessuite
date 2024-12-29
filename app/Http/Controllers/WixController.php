<?php

namespace App\Http\Controllers;

use App\Enum\Platform;
use App\Services\PlatformService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use StoresSuite\WixConnect\WixConnect;

class WixController extends Controller
{
    public function __construct(
        private WixConnect $wixConnect,
        private PlatformService $platformService
    ) {}

    /**
     * Initiate wix connection
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function initiate(Request $request): RedirectResponse
    {
        $plaform = $this->platformService->get($request);
        return redirect()->route('wix.oauth.app', [
            'state' => encrypt(json_encode([
                'platform' => $plaform->value
            ]))
        ]);
    }

    /**
     * Complete wix connection
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function complete(Request $request): RedirectResponse
    {
        $this->wixConnect->connectSite(Auth::id(), (int) $request->wixSiteId);
        $stateData = json_decode(decrypt($request->state), true);
        if ($stateData['platform'] === Platform::WEB->value)
            return redirect()->route('dashboard');
    }
}
