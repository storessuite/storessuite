export default function Install() {
    return <div className="bg-gray-100 w-full lg:w-[480px] mx-auto min-h-screen border-x border-gray-200 flex items-center justify-center h-full">
        <div className="p-6">
            <p className="font-bold text-center text-xl mt-3">Looks like you do not have the app installed on your site.</p>
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
}