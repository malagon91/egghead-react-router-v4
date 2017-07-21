//Vidoe 14 

//Understand the Difference Between the React Router v4 Router Types

/**
 * React Router introduces several different router types that are useful for various environments where 
 * routing is typically needed. The BrowserRouter, NativeRouter, StaticRouter, HashRouter, and MemoryRouter 
 * are all available to suit your needs and requirements. Understanding when and why to use the variety of 
 * routers is an important part of understanding React Router v4.

 */
import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Link,
  Route
} from 'react-router-dom';

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
)

const forceRefresh = () => {
  console.log(new Date())
  return false
}

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
)

const HashRouterApp = () => (
  <HashRouter hashType="hashbang">
    <LinksRoutes />
  </HashRouter>
)

const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1}
    >
    <LinksRoutes />
  </MemoryRouter>
)

const StaticRouterApp = () => (
  <StaticRouter location="/about" context={{}}>
    <LinksRoutes />
  </StaticRouter>
)


export default MemoryRouterApp
