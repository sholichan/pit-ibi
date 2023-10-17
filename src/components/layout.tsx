export default function Layout({ children }: any) {
  return (
    <main className={`flex h-screen flex-col items-center justify-center`}>
      <div className="flex flex-wrap justify-start h-full w-full lg:w-80 lg:h-5/6 bg-gray-200 overflow-auto">
        {children}
      </div>
    </main>
  )
}
