import { Card} from 'react-bootstrap';

function PostCard({post}) {
    return <div className='PostCard'>
        <Card>
            <Card.Body>
                <Card.Title className='PostTitle'>{post.title}</Card.Title>
                <Card.Text className='PostBody'>
                    {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>;
}

export default PostCard;