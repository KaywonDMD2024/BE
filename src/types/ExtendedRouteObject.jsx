import { RouteObject } from "react-router-dom";

/**
 * @typedef {Object} ExtendedRouteObject
 * @property {string} [text]
 * @property {boolean} [display]
 */

/**
 * @type {RouteObject & ExtendedRouteObject}
 */
const myRoute = {
  path: "/example",
  text: "Example Route",
  display: true,
};
