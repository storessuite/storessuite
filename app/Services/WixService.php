<?php

namespace App\Services;

use App\Models\User;
use StoresSuite\Wix\Contracts\WixContract;
use StoresSuite\Wix\Models\WixSite;
use Illuminate\Support\Str;
use StoresSuite\WixConnect\WixConnect;

class WixService implements WixContract
{
    public function __construct(
        private User $user,
        private WixConnect $wixConnect,
    ) {}

    public function handleInstallation(WixSite $wixSite): bool
    {
        $user = $this->user->query()->updateOrCreate([
            'email' => $wixSite->_id,
        ], [
            'name' => $wixSite->getName(),
            'email' => $wixSite->_id,
            'email_verified_at' => now(),
            'password' => Str::random(),
        ]);

        return $this->wixConnect->connectSite($user->id, $wixSite->id);
    }
}
