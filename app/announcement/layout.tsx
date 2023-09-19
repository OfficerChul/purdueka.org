export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav className="bg-stone-950 w-full h-20">
        </nav>
        <div  className="container m-auto">
        {children}
        </div>
        <footer className="bg-stone-950 w-full h-20 mt-20">

        </footer>
      </section>
    )
  }