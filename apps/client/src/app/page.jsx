import Footer from "../components/global/footer";
import Navbar from "../components/global/navbar";
import LandingPage from "../components/landingPage/landingPage";

export default function Page() {
  return (
    <main className="w-full ">
      <Navbar />
      <div className="container py-2">
        <LandingPage />
      </div>
      <Footer />
    </main>
  );
}
