import { Header } from "@/components/nav/header";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/nav/footer";
import { LoadingPage } from "./pages/loading-page";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
const LandingPage = lazy(() => import("./pages/landing-page"));

export const ROUTE_PATHS = {
  landing: "",
  application: "/app",
  login: "/login",
  signUp: "/sign-up",
};

const App = () => {
  return (
    <div className="">
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path={ROUTE_PATHS.landing} element={<LandingPage />} />
            <Route path={ROUTE_PATHS.login} element={<LoginPage />} />
            <Route path={ROUTE_PATHS.signUp} element={<RegisterPage />} />
          </Routes>
        </div>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
