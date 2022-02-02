import Link from 'next/link';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function PostCard({post}) {
    return <div className='PostCard'>
        <Card>
            <Card.Body>
                <Card.Title className='PostTitle'>Post Id - {post.id}</Card.Title>
                <Container className='PostActionsContainer'>
                    <Row className="justify-content-md-center">
                        <Col xs lg="3">
                            <Link passHref={true} href={`/posts/${post.id}`}><Button variant="primary">Check post details</Button></Link> 
                        </Col>
                        <Col xs lg="3">
                            <Link passHref={true} href={'/users/' + post.userId}><Button variant="primary">Check user details</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    </div>;
}

export default PostCard;