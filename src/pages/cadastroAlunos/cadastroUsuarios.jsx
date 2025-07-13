import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CadastrarUsuarios(){
    return(
        
        <div className='container p-5'>
            <Card>
                <Card.Header as="h3">Cadastrar Novo Usuário</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Row className="mb-3">
                            <Col md={6}>
                                Nome
                                <Form.Control type="text" placeholder="Nome do aluno" />
                            </Col>
                            <Col md={6}>
                                Email
                                <Form.Control type="text" placeholder="E-mail" />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                Modalidade
                                <Form.Select aria-label="Modalidade">
                                    <option value="online">Online</option>
                                    <option value="presencial">Presencial</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                Objetivo
                                <Form.Select aria-label="Objetivo">
                                    <option value="Ganho de massa">Ganho de massa</option>
                                    <option value="Perda de peso">Perda de peso</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                Data de nascimento
                                <Form.Control type="date" />
                            </Col>
                            <Col md={6}>
                                Data de início
                                <Form.Control type="date" />
                            </Col>
                        </Row>

                    </Card.Text>
                    <Button variant="primary w-100">Salvar</Button>
                </Card.Body>
            </Card>
        </div>
    )

}
export default CadastrarUsuarios;