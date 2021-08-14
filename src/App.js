import './App.scss'

import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { Switch, Route } from 'react-router-dom'

// import Cats from './components/Cats'
import Cats from './function-components/Cats'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Product from './pages/Product'
import User from './pages/User'

const sentryDSN = ''

Sentry.init({
  dsn: sentryDSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.1,
})

function App() {
  const product = {
    name: 'Awesome Product',
    description: 'this is good!',
    price: 49000,
  }

  return (
    <div className="App">
      <main>
        {/* <Cats />
        <ErrorBoundary errorFallback={ErrorFallback}>
          <Product />
        </ErrorBoundary> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/user" component={User} />
        </Switch>
      </main>
    </div>
  )
}

export default App

// function Product({ product }) {
//   return (
//     <div className="Product">
//       <span>Product: {product.name}</span>
//       <span>Description: {product.description}</span>
//       <span>Price: {product.price}</span>
//     </div>
//   )
// }

function ErrorFallback() {
  return (
    <div>
      상품을 불러오는 도중 에러가 발생했습니다. 다시 확인하려면 아래 버튼을 눌러주세요.
      <br />
      <button
        onClick={() => {
          window.location.reload()
        }}
      >
        새로고침
      </button>
    </div>
  )
}
