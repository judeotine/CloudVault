import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CloudVault
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-md">
              Secure file sharing and storage for your business needs.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-6 items-center">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} CloudVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}