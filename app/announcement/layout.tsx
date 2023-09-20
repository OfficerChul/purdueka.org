import Footer from '../_layout/footer'

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav className="bg-stone-950 w-full h-20">
        </nav>
        <div  className="container m-auto min-h-screen">
        {children}
        </div>
        <Footer></Footer>
      </section>
    )
  }