import { Link } from "react-router-dom";

function Homenav() {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <img src="/images/logo-blue.svg" alt="AdviseBridge" className="h-8"
                    />
                    <span className="text-xl font-semibold text-blue-700">
                        advisebridge
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <Link href="/student" className="hover:text-blue-600">
                        Student
                    </Link>
                    <Link href="/advisor" className="hover:text-blue-600">
                        Advisor
                    </Link>
                    <Link href="/institution" className="hover:text-blue-600">
                        Institution
                    </Link>
                    <Link href="/explore" className="hover:text-blue-600">
                        Explore
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Homenav;
