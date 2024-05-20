type Main = {
  children: React.ReactNode
}

const Main = ({ children }: Main) => {
  return <main className="flex-1 overflow-y-auto p-4">{children}</main>
}

export default Main
