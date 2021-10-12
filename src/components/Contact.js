import React, { Component } from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            username:null,
            email:null,
            mobile:null,
            city:null,
            state:null,
            zip:null,
            errors:{
                username:'',
                email:'',
                mobile:'',
                city:'',
                zip:''
            }
        }

    }
    handler=(event)=>{
        const {name,value}=event.target;
        let errors=this.state.errors;
        switch(name){
            case 'username':
                errors.username=value.length<4?'enter username properly':'';
                break;
            case 'email':
                errors.email=regForEmail.test(value)?'':'Email is not valid';
                break;
            case 'mobile':
                    errors.mobile=value.length<10?'mobile must me 10 chanrater long':'';
                    break;
            
                case 'city':
                    errors.city=value.length<4?'City is not valid':'';
                    break;
                    default:        
                    break;

        }
        this.setState({errors,[name]:value},()=>{
            console.log(errors)
        })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        if(this.validate(this.state.errors))
        {
            alert("Valid Form");
            this.setState({isSubmit: true});
        }
        else {
            alert("Invalid Form");
        }
     }
     validate=(errors)=>{
        let valid=true;
        Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
        return valid;
    }
    render() {
        const {errors, isSubmit}=this.state;
        return (
            <Container className="mt-4 mb-4">
              
                
                  <h2>Contact Form</h2>
                  <Form onSubmit={this.formSubmit}>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextname">
    <Form.Label column sm="2">
      Username
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" name="username" placeholder="Enter name" onChange={this.handler} required /> {errors.username.length>0 && 
            <span style={{color:'red'}}>{errors.username}</span>}
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" name="email" placeholder="Enter email" onChange={this.handler}  required />
      {errors.email.length>0 && 
            <span style={{color:'red'}}>{errors.email}</span>}
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextmobile">
    <Form.Label column sm="2">
      Mobile
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" name="mobile" placeholder="mobile" onChange={this.handler}  required />
      {errors.mobile.length>0 && 
            <span style={{color:'red'}}>{errors.mobile}</span>}
    </Col>
  </Form.Group>
  
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control name="city" onChange={this.handler}  required/>
      {errors.city.length>0 && 
            <span style={{color:'red'}}>{errors.city}</span>}
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose..." required>
        <option>Choose...</option>
        <option>Karnataka</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control name="zip" onChange={this.handler}  required />
      {errors.zip.length>0 && 
            <span style={{color:'red'}}>{errors.zip}</span>}
    </Form.Group>
  </Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            </Container>
        )
    }
}

export default Contact

