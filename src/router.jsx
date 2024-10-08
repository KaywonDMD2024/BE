import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExtendedRouteObject } from "./types/ExtendedRouteObject";

/** @type {ExtendedRouteObject[]} */
const navigation = [
  {
    text: "클리커 게임",
    path: "/clickerGame",
    lazy: () => import("@/routes/ClickerGame"),
  },
  {
    text: "크레딧",
    path: "/credit",
    lazy: () => import("@/routes/Credit"),
  },
  {
    text: "커리큘럼",
    path: "/curriculum",
    lazy: () => import("@/routes/curriculum"),
  },
  {
    text: "방명록",
    path: "/guestBook",
    lazy: () => import("@/routes/GuestBook"),
  },
  {
    text: "메뉴",
    path: "/menu",
    lazy: () => import("@/routes/Menu"),
  },
  {
    text: "프로젝트",
    path: "/projects",
    lazy: () => import("@/routes/Projects"),
  },
  {
    text: "롤링페이퍼",
    path: "/rollingPaper",
    lazy: () => import("@/routes/RollingPaper"),
  },
  {
    text: "학생",
    path: "/students",
    lazy: () => import("@/routes/Students"),
  },
];

/** @type {RouteObject[]} */
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

export const navigationItems = getNavigationItems(navigation);
