import '@/app/global.css'

export const metadata = {
  title: 'C.L. Haskell & Son',
  description: 'Electricians serving Deer Isle and surrounding towns'
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html >
  )
}
