import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main
        style={{
          padding: "2rem",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;