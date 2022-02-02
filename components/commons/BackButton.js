import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

function BackButton() {
    const router = useRouter();
    const backStr = '<<';
    return <Button className='BackButton' onClick={() => router.back()} variant="primary"> {backStr} Go Back</Button>;
}

export default BackButton;