import { Header } from "@/components/nav/header";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/nav/footer";
import { LoadingPage } from "./pages/loading-page";

const LandingPage = lazy(() => import("./pages/landing-page"));

export const ROUTE_PATHS = {
  landing: "/",
  application: "/app",
  login: "/login",
  signUp: "/sign-up",
};

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Suspense fallback={<LoadingPage />}>
          <Route path={ROUTE_PATHS.landing} element={<LandingPage />} />
        </Suspense>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
