import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getData} from "../redux/reducers/productsReducer"

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
  const loading = useSelector(state => state.productsReducer.loading);
  const error = useSelector(state => state.productsReducer.error);

  const reload = () => {
    dispatch(getData())
  }

  useEffect(() => {
    dispatch(getData())
  }, [])
  if (loading) {
    return(
      <div>Загрузка...</div>
    )
  }

  if (error) {
    return(
      <div>
        <div>{error}</div>
        <button onClick={reload}>Загрузить снова</button>
      </div>
    )
  }

  return (
    <div>
      {products.map((product) => {
        return(
          <div key={product.id}>
            {product.title}
          </div>
        )
      })}
    </div>
  );
}

export default ProductsPage;