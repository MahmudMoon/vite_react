import { data } from "../../assets/data";
const ProductList = () => {
  return (
    <div>
      {data.map((d) => {
        return <Product email={d.email} />;
      })}
    </div>
  );
};

const Product = (props) => {
  return (
    <div>
      <h3>{props.email}</h3>
    </div>
  );
};

export default ProductList;
