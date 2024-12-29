<?php

namespace App\Services;

use App\Enum\Platform;
use Illuminate\Http\Request;

class PlatformService
{
    /**
     * Get platform
     *
     * @param Request $request
     * @return Platform
     */
    public function get(Request $request): Platform
    {
        if ($request->has('instance')) return Platform::WIX;
        return Platform::WEB;
    }
}
