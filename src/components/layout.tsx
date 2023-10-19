export default function Layout({ children }: any) {
  return (
    <main className={`flex h-screen flex-col items-center justify-center`}>
      <div className="flex flex-wrap justify-start h-full w-full lg:w-full lg:h-full bg-gray-200 overflow-auto">
        {children}
      </div>
    </main>
  )
}
