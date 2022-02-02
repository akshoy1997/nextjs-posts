import { Fragment } from 'react';
import Header from '../components/commons/Header';
import PageTitle from '../components/commons/PageTitle';
import PostCard from '../components/index/PostCard';
import getHttp from '../services/http_service';

function HomePage({data}) {
  const posts = data;
  return <Fragment>
    <Header/>
    <PageTitle headerText={'No of Posts - ' + posts.length}/>
    {
      posts.map((post) => {
        return <PostCard key={post.id} post={post}/>
      })
    }
  </Fragment>;
}

export async function getServerSideProps() {
  const data = await getHttp(`https://jsonplaceholder.typicode.com/posts`);
  return { props: { data } }
}

export default HomePage;