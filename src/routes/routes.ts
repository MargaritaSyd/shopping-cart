import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const ShoppingPage = lazy(() => import(/*webpackChunkName: "ShoppingPage"*/'../component-patterns/pages/ShoppingPage'));

export const routes: Route[] = [
  {
    to: '/shopping',
    path: '/shopping',
    Component: ShoppingPage,
    name: 'Shopping',
  },

]