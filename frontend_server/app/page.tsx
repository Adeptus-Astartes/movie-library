import { Metadata } from 'next'
import Layout, { siteTitle } from '../components/layout';
//import { siteTitle } from './layout';
import utilStyles from './utils.module.css';
import { getSortedPostsData } from 'lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export const metadata: Metadata = {
  title: siteTitle
}

export default function Page() {
  const allPostsData = getSortedPostsData();
  return (
    <>
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    </>
  );
}