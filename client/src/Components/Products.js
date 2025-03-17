import { Container, Row, Col, Button, Input, Table } from "reactstrap";
//import the useSelector from react-readux
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
  //Declare a variable to store the current value of the producs state from the Redux store
  const productsList = useSelector((state) => state.products.value);
  return (
    <Container>
      <p className="display-6">Shopping</p>
      <Row>
        <Col md={6}>
          {/*Use the array map method to display the values from the state */}
          <table className="table">
            <thead>
              <tbody>
                {productsList.map((prod) => (
                  <tr key={prod.id}>
                    <td>
                      <img src={prod.images} className="img-big"></img>
                    </td>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                  </tr>
                ))}
              </tbody>
            </thead>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
