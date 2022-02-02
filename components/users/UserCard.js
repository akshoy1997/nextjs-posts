import { Card} from 'react-bootstrap';

function UserCard({user}) {
    return <div className='PostCard'>
        <Card>
            <Card.Body>
                <Card.Title className='PostTitle'>{user.username}</Card.Title>
                <Card.Text className='PostBody'>
                    <b>Name:</b> {user.name} <br />
                    <b>Phone:</b> {user.phone} <br />
                    <b>Email:</b> {user.email} <br />
                    <b>Website:</b> {user.website} <br />
                    <b>Address:</b> {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode} <br />
                    <b>Company:</b> {user.company.name}, {user.company.bs}, {user.company.catchPhrase} <br />
                </Card.Text>
            </Card.Body>
        </Card>
    </div>;
}

export default UserCard;