import './App.css';
import Header from './component/Header';
import ReadTask from './component/ReadTask';
import AddTask from './component/AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';








function App() {
  return (
    <div className='body'>
    <Header/>
    <Container>
    <Row  className="justify-content-md-center">
      <Col lg="6"><AddTask/><ReadTask/></Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
