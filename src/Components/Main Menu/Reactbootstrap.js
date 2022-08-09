import React, {Component} from 'react'
import axios from 'axios'


import {Container,Row,Col,Button,Card} from 'react-bootstrap'

{/*import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'*/}

const url=`https://jsonplaceholder.typicode.com/photos?_start=1&_end=10`//array_type_of_object


export default class Reactbootstrap extends Component

{
    constructor(props)
    {
        super(props)
        this.state ={
         photos:[]
        }
    }
    render()
    {
        return(<>
        
        <div className='container text-center'>
          <h2>REACT BOOTSTRAP UI PACKAGE</h2>
          <Container>
              <Row>
                  {
                      this.state.photos.map((res,i)=>{
                          return(<Col lg={4} md={4} sm={6} xs={12}>
                    <Card className='my-2'>
                    <Card.Img variant="top"className='w-50 mx-auto' src={res.thumbnailUrl} />
                    <Card.Body>
                    <Card.Title className='h6'>{res.title}</Card.Title>
                    <a className='btn btn-primary' href={res.url} target="_blank">Visit Site</a>
                </Card.Body>
                </Card>
                         </Col>)
                      })
                  }
                  </Row>
          </Container>
        </div>
        </>)
    }
    componentDidMount()
    {
        axios.get(url).then( (result) => this.setState({photos:result.data}))
    }
}