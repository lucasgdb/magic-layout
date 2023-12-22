import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() =>
  import("../pages/MainPage/MainPage").then((module) => ({
    default: module.MainPage,
  }))
);

const ScrollablePage = lazy(() =>
  import("../pages/ScrollablePage/ScrollablePage").then((module) => ({
    default: module.ScrollablePage,
  }))
);

const CentralizingPage = lazy(() =>
  import("../pages/CentralizingPage/CentralizingPage").then((module) => ({
    default: module.CentralizingPage,
  }))
);

export const ApplicationRoutes = () => {
  return (
    <Suspense
      fallback={
        <div style={{ padding: 40 }}>
          <p>Carregando...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/scrollable" element={<ScrollablePage />} />
        <Route path="/centralizing" element={<CentralizingPage />} />
      </Routes>
    </Suspense>
  );
};
