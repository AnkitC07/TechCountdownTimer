import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom'
import Homepage from './components/HomePage'

import { TimerType } from './components/TimerType/TimerType'
import { ProductPage } from './components/Product/ProductPage'
import Content from './components/Product/Content'
import Design from './components/Product/Design'
import Placement from './components/Product/Placement'
import Content_top from './components/Top_Bottom/Content_top'
import Design_top from './components/Top_Bottom/Design_top'
import Placement_top from './components/Top_Bottom/Placement_top'
import Top_BottomPage from './components/Top_Bottom/Top_BottomPage'
import LandingPage from './components/LandingPage/LandingPage'
import Content_land from './components/LandingPage/Content_land'
import Design_land from './components/LandingPage/Design_land'
import Placement_land from './components/LandingPage/Placement_land'
import CartPage from './components/CartPage/CartPage'
import Content_cart from './components/CartPage/Content_cart'
import Design_cart from './components/CartPage/Design_cart'
import Placement_cart from './components/CartPage/Placement_cart'
import Help from './components/layouts/Help'
/**
 * File-based routing.
 * @desc File-based routing that uses React Router under the hood.
 * To create a new route create a new .jsx file in `/pages` with a default export.
 *
 * Some examples:
 * * `/pages/index.jsx` matches `/`
 * * `/pages/blog/[id].jsx` matches `/blog/123`
 * * `/pages/[...catchAll].jsx` matches any URL not explicitly matched
 *
 * @param {object} pages value of import.meta.globEager(). See https://vitejs.dev/guide/features.html#glob-import
 *
 * @return {Routes} `<Routes/>` from React Router, with a `<Route/>` for each file in `pages`
 */
export default function Routes({ pages }) {
  const routes = useRoutes(pages)
  const routeComponents = routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ))

  const NotFound = routes.find(({ path }) => path === '/notFound').component

  return (
    <ReactRouterRoutes>
      {routeComponents}
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Homepage />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/TimerType" element={<TimerType />} />
      <Route path="/ProductPage" element={<ProductPage />}>
        <Route index element={<Content />} />
        <Route path="Design" element={<Design />} />
        <Route path="Placement" element={<Placement />} />
      </Route>
      <Route path="/Top_BottomPage/*" element={<Top_BottomPage />}>
        <Route index element={<Content_top />} />
        {/* <Route index element={<Navigate to="Content_top" replace />} /> */}
        <Route path="Content_top" element={<Content_top />} />
        <Route path="Design_top" element={<Design_top />} />
        <Route path="Placement_top" element={<Placement_top />} />
      </Route>
      <Route path="/LandingPage" element={<LandingPage />}>
        <Route path="" element={<Content_land />} />
        <Route path="Design_land" element={<Design_land />} />
        <Route path="Placement_land" element={<Placement_land />} />
      </Route>
      <Route path="/CartPage" element={<CartPage />}>
        <Route path="" element={<Content_cart />} />
        <Route path="Design_cart" element={<Design_cart />} />
        <Route path="Placement_cart" element={<Placement_cart />} />
      </Route>
    </ReactRouterRoutes>
  )
}

function useRoutes(pages) {
  const routes = Object.keys(pages)
    .map((key) => {
      let path = key
        .replace('./pages', '')
        .replace(/\.(t|j)sx?$/, '')
        /**
         * Replace /index with /
         */
        .replace(/\/index$/i, '/')
        /**
         * Only lowercase the first letter. This allows the developer to use camelCase
         * dynamic paths while ensuring their standard routes are normalized to lowercase.
         */
        .replace(/\b[A-Z]/, (firstLetter) => firstLetter.toLowerCase())
        /**
         * Convert /[handle].jsx and /[...handle].jsx to /:handle.jsx for react-router-dom
         */
        .replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`)

      if (path.endsWith('/') && path !== '/') {
        path = path.substring(0, path.length - 1)
      }

      if (!pages[key].default) {
        console.warn(`${key} doesn't export a default React component`)
      }

      return {
        path,
        component: pages[key].default,
      }
    })
    .filter((route) => route.component)

  return routes
}
