import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
    return <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} href="/posts/5">Climes Posts Demo</Navbar.Brand>
        </Container>
    </Navbar>;
}

export default Header;