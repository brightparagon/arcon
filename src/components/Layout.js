import './Layout.scss'
import Navigation from './Navigation'

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      <article className="Layout__contents">
        {children}
      </article>      
    </div>
  )
}

export default Layout
