// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Deploy your web-app in less than{" "}
            <span className="text-blue-600">3 Minutes</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products?sort=recent"
          title="Brand new"
        /> */}
      </main>
    </>
  );
}
