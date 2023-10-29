import Link from "next/link";
import Image from "next/image";
import styles from 'app/layout.module.css';
import utilStyles from 'styles/utils.module.css';

const name = 'Vadym Tykhoniuk';
export const siteTitle = 'Next.js Sample Website';

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return <section>{children}</section>
// }


export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          <Link href="/">
            <Image
              priority
              src="/images/profile.webp"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      </header>
      <section>{children}</section>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  )
}