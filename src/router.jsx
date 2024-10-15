import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";

const ClickerGame = lazy(() => import("@/routes/ClickerGame/ClickerGame.jsx"));
const Credit = lazy(() => import("@/routes/Credit/Credit.jsx"));
const Curriculum = lazy(() => import("@/routes/Curriculum/Curriculum.jsx"));

const GuestBook = lazy(() => import("@/routes/GuestBook/GuestBook.jsx"));
const Projects = lazy(() => import("@/routes/Projects/Projects.jsx"));
const RollingPaper = lazy(
  () => import("@/routes/RollingPaper/RollingPaper.jsx")
);
const Students = lazy(() => import("@/routes/Students/Students.jsx"));
const MainHome = lazy(() => import("@/routes/MainHome/MainHome.jsx"));

const navigation = [
  {
    text: "클리커 게임",
    path: "/clickerGame",
    lazy: ClickerGame,
  },
  {
    text: "크레딧",
    path: "/credit",
    lazy: Credit,
  },
  {
    text: "커리큘럼",
    path: "/curriculum",
    lazy: Curriculum,
  },
  {
    text: "방명록",
    path: "/guestBook",
    lazy: GuestBook,
  },
  {
    text: "프로젝트",
    path: "/projects",
    lazy: Projects,
  },
  {
    text: "롤링페이퍼",
    path: "/rollingPaper",
    lazy: RollingPaper,
  },
  {
    text: "학생",
    path: "/students",
    lazy: Students,
  },
  {
    text: "메인",
    path: "/",
    lazy: MainHome,
  },
];

export const navigationItems = navigation.map((item) => ({
  text: item.text,
  path: item.path,
}));

const configRoutes = (navigation) =>
  navigation.map((item) => ({
    path: item.path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainHome />
      </Suspense>
    ),
  }));

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: configRoutes(navigation),
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

export default router;
