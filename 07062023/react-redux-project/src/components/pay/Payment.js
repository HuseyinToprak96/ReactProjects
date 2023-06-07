import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Form,Row,Col,FormGroup,Label,Input, Button, Table } from "reactstrap";
import alertify from "alertifyjs";

class Payment extends Component {
removeFromCart(product) {
this.props.actions.removeFromCart(product);
alertify.error(product.productName + " removed from cart!");
}
render() {
    let total =0;
    console.log(this.props.cart)
    this.props.cart.forEach(c => {
        total+=c.product.price*c.quantity;
    });
return (
<div>
<h2 className="bg-dark" style={{color:"white",textAlign:"center"}}>Siparişe Tamamla</h2>
<Table>
    <thead>
        <tr>
            <th>Sipariş Bilgileri</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Toplam Tutar: {total} TL</td>
        </tr>
    </tbody>
</Table>
<img src="https://w7.pngwing.com/pngs/708/687/png-transparent-credit-card-balance-transfer-payment-card-credit-card-angle-payment-internet.png" height="350px" width="100%" />
<Form>
<Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Ad
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Adınızı Giriniz"
          type="text"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Soyad
        </Label>
        <Input
          id="surname"
          name="surname"
          placeholder="Soyadınızı Giriniz"
          type="text"
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email Giriniz"
          type="email"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Telefon Numarası
        </Label>
        <Input
          id="examplePassword"
          name="phoneNumber"
          placeholder=""
          type="text"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Adres
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="Adres Giriniz"
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          Şehir
        </Label>
        <Input
          id="exampleCity"
          name="city"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          Sokak
        </Label>
        <Input
          id="exampleState"
          name="state"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="exampleZip">
          Posta Kodu
        </Label>
        <Input
          id="exampleZip"
          name="zip"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup check>
    <Input
      id="exampleCheck"
      name="check"
      type="checkbox"
    />
    <Label
      check
      for="exampleCheck"
    >
      Ön Bilgilendirme Formunu ve Mesafeli Satış Sözleşmesinin okudum ve onaylıyorum.
    </Label>
  </FormGroup>
  <Button color="primary" className="mt-2">
  Tamamla
  </Button>
</Form>
</div>
);
}
}

function mapStateToProps(state) {
return {
cart: state.cartReducer,
};
}

function mapDispatchToProps(dispatch) {
return {
actions: {
removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
},
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);