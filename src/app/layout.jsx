export const metadata = {
  title: 'C.L. Haskell & Son',
  description: 'Electricians serving Deer Isle and surrounding towns'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html >
  )
}
