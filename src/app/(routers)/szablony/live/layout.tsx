

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>

        <main className="text-p mx-auto h-screen overflow-hidden max-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
