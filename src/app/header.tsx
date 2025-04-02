import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between h-12">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:opacity-90 transition-opacity"
          >
            <Image 
              src="/logo.png" 
              width="32" 
              height="32" 
              alt="Cloud Vault logo"
              className="w-auto h-7"
            />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Cloud Vault
            </span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <SignedIn>
              <div className="flex items-center gap-2">
                <OrganizationSwitcher 
                  appearance={{
                    elements: {
                      rootBox: "flex items-center",
                      organizationSwitcherTrigger: "flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors"
                    }
                  }}
                />
                <div className="h-5 w-[1px] bg-gray-200 mx-1"></div>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-7 h-7 rounded-full"
                    }
                  }}
                />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 text-sm rounded-md transition-colors"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
      </div>
    </header>
  );
}