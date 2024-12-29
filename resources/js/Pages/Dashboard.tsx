import { ChevronRightIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
    return (
        <div className="bg-gray-100 w-full lg:w-[480px] mx-auto min-h-screen border-x border-gray-200">
            <div className="p-6">
                <ul
                    role="list"
                    className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
                >
                    <li className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
                        <div className="flex min-w-0 gap-x-4 items-center">
                            <ArrowUpTrayIcon className="size-6 flex-none text-gray-800" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-md font-semibold text-gray-900">
                                    <span>
                                        <span className="absolute inset-x-0 -top-px bottom-0" />
                                        Export products
                                    </span>
                                </p>
                                <p className="text-xs/5 font-semibold text-gray-500">14 pending</p>
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm/6 text-gray-900 font-semibold">+3</p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <p className="text-xs/5 font-semibold text-gray-500">14 pending</p>
                                </div>
                            </div>
                            <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </div>
                    </li>
                    <li className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
                        <div className="flex min-w-0 gap-x-4 items-center">
                            <PaintBrushIcon className="size-6 flex-none text-gray-800" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-md font-semibold text-gray-900">
                                    <span>
                                        <span className="absolute inset-x-0 -top-px bottom-0" />
                                        Bulk edit
                                    </span>
                                </p>
                                <p className="text-xs/5 font-semibold text-gray-500">140 pending</p>
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm/6 text-gray-900 font-semibold">Role</p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <p className="text-xs/5 font-semibold text-gray-500">14 pending</p>
                                </div>
                            </div>
                            <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-full lg:w-[480px] m-auto fixed inset-x-0 bottom-0 p-6 border-t border-gray-200 rounded-t-3xl drop-shadow-sm bg-white">
                <button
                    type="button"
                    className="w-full rounded-full bg-black px-4 py-3 text-lg font-bold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Get Started
                </button>
                <p className="text-center text-xs text-gray-500 mt-3 font-semibold">&#169; Copyrights. All rights reserved.</p>
            </div>
        </div>
    );
}
