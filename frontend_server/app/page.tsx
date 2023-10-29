import { Metadata } from 'next'
import { siteTitle } from './layout';
import utilStyles from 'styles/utils.module.css';
import { getSortedPostsData } from 'lib/posts';
import Link from 'next/link';
import Date from 'components/date';
import styles from './layout.module.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: siteTitle,
  description: "Learn how to build a personal website using Next.js",
}

export default function Page() {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/profile.webp"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>Vadym Tykhoniuk</h1>
          </>
        </header>
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
      </div>
    </>
  );
}