import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { Logo } from "../ui/logo";
// import MaxWidthWrapper from './MaxWidthWrapper'
// import { Icons } from './Icons'
// import NavItems from './NavItems'
// import { buttonVariants } from './ui/button'
// import Cart from './Cart'
// import { getServerSideUser } from '@/lib/payload-utils'
// import { cookies } from 'next/headers'
// import UserAccountNav from './UserAccountNav'
// import MobileNav from './MobileNav'

export const Header = () => {
  const user = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* <MobileNav /> */}

              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              {/* 
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div> */}

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      to="/sign-in"
                      className={buttonVariants({
                        variant: "ghost",
                      })}>
                      Sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <div>Some Nav</div>
                  ) : (
                    // <UserAccountNav user={user} />
                    <Link
                      to="/sign-up"
                      className={buttonVariants({
                        variant: "ghost",
                      })}>
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  {/* 
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
