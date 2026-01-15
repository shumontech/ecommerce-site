import {createBrowserRouter} from "react-router-dom";
import RootLayOut from "../layout/RootLayOut";
import Home from "../page/Home/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component:Home,
      },
    ],
  },
]);