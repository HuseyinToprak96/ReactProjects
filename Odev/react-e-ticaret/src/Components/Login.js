import {useState} from 'react'
import {Form,FormGroup,Input,Label,Button, Container, Row,Col} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
export default function Login (props){

    const [inputs,setInputs]=useState({});
const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}));
  }
  const navigate = useNavigate();
 const handleSubmit=(event)=>{
    event.preventDefault();
    props.loginSubmit(inputs)
    
    console.log(props.authorization)
    if (props.authorization==true) {
        navigate("/");
    }
  }
 
  
        return(<>
        <Container>
            <Row>
                <Col className='col-4 offset-4'>
               <Form onSubmit={handleSubmit}>   
                <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      value={inputs.email}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      value={inputs.password}
      onChange={handleChange}
    />
  </FormGroup>
  <Button className="btn btn-primary">
    Submit
  </Button>
  </Form>
                </Col>
            </Row>
        
  
  </Container>
        </>)
}