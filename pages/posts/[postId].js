import { Fragment } from 'react';
import Header from '../../components/commons/Header';
import BackButton from '../../components/commons/BackButton';
import PageTitle from '../../components/commons/PageTitle';
import PostCard from '../../components/posts/PostCard';
import getHttp from '../../services/http_service';

function PostDetailPage({data}) {
    const post = data;
    return <Fragment>
        <Header/>
        <BackButton/>
        <PageTitle headerText={'Detail of post - ' + post.id}/>
        <PostCard key={post.id} post={post}/>
    </Fragment>;
}

export async function getServerSideProps(context) {
    const { postId } = context.query;
    const data = await getHttp(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return { props: { data } }
  }

export default PostDetailPage;