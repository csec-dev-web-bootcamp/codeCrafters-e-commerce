import Footer from "../components/global/footer";
import Navbar from "../components/global/navbar";
import LandingPage from "../components/landingPage/landingPage";
import { getMe } from "../data/users";

export default async function Page() {
  const user = await getMe()
  console.log({user});
  return (
    <main className="w-full ">
      <Navbar user={user} />
      <div className="container py-2">
        <LandingPage />
      </div>
      <Footer />
      <page />
    </main>
  );
}
