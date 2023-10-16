export default function Layout({ children }: any) {
  return (
    <main className={`flex h-screen flex-col items-center justify-center`}>
      <div className="flex h-full w-full lg:w-80 lg:h-auto bg-gray-200">
        {children}
      </div>
    </main>
  )
}
