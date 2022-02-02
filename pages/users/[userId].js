import { Fragment } from 'react';
import Header from '../../components/commons/Header';
import PageTitle from '../../components/commons/PageTitle';
import BackButton from '../../components/commons/BackButton';
import UserCard from '../../components/users/UserCard';
import getHttp from '../../services/http_service';

function UserDetailPage({data}) {
    const user = data;
    return <Fragment>
        <Header/>
        <BackButton/>
        <PageTitle headerText={'Detail of user - ' + user.id}/>
        <UserCard key={user.id} user={user}/>
    </Fragment>;
}

export async function getServerSideProps(context) {
    const { userId } = context.query;
    const data = await getHttp(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return { props: { data } }
  }

export default UserDetailPage;