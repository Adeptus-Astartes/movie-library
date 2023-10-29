import { getAllPostIds, getPostData } from 'lib/posts';

import Date from 'components/date';
import utilStyles from 'styles/utils.module.css';

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug)

  // No post? Bail...
  if (!post) {
    return {}
  }

  return {
    title: post.title,
  }
}


export default async function PagePage({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}


export async function generateStaticParams() {
  // Get a list of all blog posts.
  const posts = await getAllPostIds()

  // No posts? Bail...
  if (!posts) {
    return []
  }

  return posts
}