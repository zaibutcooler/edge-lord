import { Header } from "@/components/nav/header";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/nav/footer";
import { LoadingPage } from "./pages/loading-page";
import { AuthProvider } from "./providers/auth-provider";

const LandingPage = lazy(() => import("./pages/landing-page"));
const LoginPage = lazy(() => import("./pages/login-page"));
const RegisterPage = lazy(() => import("./pages/register-page"));
const DashboardPage = lazy(() => import("./pages/dashboard-page"));
const DeploymentPage = lazy(() => import("./pages/deployment-page"));

export const ROUTE_PATHS = {
  landing: "/",
  dashboard: "/dashboard",
  deployment: "/deployment",
  login: "/login",
  signUp: "/sign-up",
};

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path={ROUTE_PATHS.landing} element={<LandingPage />} />
            <Route path={ROUTE_PATHS.login} element={<LoginPage />} />
            <Route path={ROUTE_PATHS.signUp} element={<RegisterPage />} />
            <Route path={ROUTE_PATHS.dashboard} element={<DashboardPage />} />
            <Route path={ROUTE_PATHS.deployment} element={<DeploymentPage />} />
          </Routes>
        </div>
      </Suspense>

      <Footer />
    </AuthProvider>
  );
};

export default App;
