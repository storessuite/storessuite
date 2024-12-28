<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use StoresSuite\WixConnect\Connection;

class WixController extends Controller
{
    public function __construct(private Connection $connection) {}

    /**
     * Complete wix installation
     *
     * @param Request $request
     * @return
     */
    public function complete(Request $request): RedirectResponse
    {
        $this->connection->connectSite(1, $request->wixSiteId);
        return redirect()->route('dashboard');
    }
}
