import React from "react";
import { Container } from "reactstrap";
import Navs from "../navi/Navs";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CardDetail";
import Payment from "../pay/Payment";


function App() {
return (
<Container>
<Navs />
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/cart" element={<CartDetail />} />
<Route path="/payment" element={<Payment/>}/>
<Route path="*" element={<h1>Not Found</h1>} />
</Routes>
</Container>
);
}


export default App;