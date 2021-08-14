import { useRouteMatch, useParams } from 'react-router-dom'
import qs from 'qs'

const Product = () => {
  const match = useRouteMatch()
  const params = useParams()
  const queryParams = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  })

  return (
    <main>
      <h1>Product Page</h1>
      <p>
        {JSON.stringify(queryParams, null, 2)}
      </p>
    </main>
  );
};

export default Product
