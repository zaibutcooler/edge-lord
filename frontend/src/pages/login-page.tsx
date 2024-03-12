import { ROUTE_PATHS } from "@/App";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/utils";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [errors, setErrors] = useState<any>({
    email: "",
    password: { message: "something" },
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {};

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Logo />

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              to={ROUTE_PATHS.signUp}>
              Don&apos;t have an account?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="you@example.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign in
                </Button>
              </div>
            </form>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            <Button onClick={() => {}} variant="secondary" disabled={isLoading}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
