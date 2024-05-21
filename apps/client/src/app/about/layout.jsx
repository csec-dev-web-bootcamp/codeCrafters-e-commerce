import Footer from "@app/client/components/global/footer";
import Navbar from "@app/client/components/global/navbar";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
