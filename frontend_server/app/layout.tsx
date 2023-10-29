import 'styles/global.css'

const name = 'Vadym Tykhoniuk';
export const siteTitle = 'Next.js Sample Website';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}