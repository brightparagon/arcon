import './App.scss'

import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { Switch, Route, Link, useHistory } from 'react-router-dom'

import Cats from './function-components/Cats'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Product from './pages/Product'
import User from './pages/User'
import Form from './pages/Form'

const sentryDSN = ''

Sentry.init({
  dsn: sentryDSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.1,
})

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/cats">Cats</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
    </ul>
  )
}

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
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:productName" component={Product} />
          <Route exact path="/user" component={User} />
          <Route exact path="/cats" component={Cats} />
          <Route exact path="/form" component={Form} />
          <Route component={UrlFallback} />
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

function UrlFallback() {
  const history = useHistory()

  return (
    <div>
      존재하지 않는 페이지 입니다. 404 Not Found
      <br />
      <button
        onClick={() => {
          history.push('/cats')
        }}
      >
        고양이 페이지로 가기
      </button>
    </div>
  )
}
