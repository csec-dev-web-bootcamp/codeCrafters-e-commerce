import Footer from "../components/global/footer";
import { Nav } from "../components/global/nav";
import Navbar from "../components/global/navbar";
import { SiteHeader } from "../components/layout/site-header";
import LandingPage from "../components/landingPage/landingPage";

import { getMe } from "../data/users";
import { SiteFooter } from "../components/layout/site-footer";

export default async function Page() {
  const user = await getMe();
  console.log({ user });
  return (
    <main className="w-full ">
      {/* <Navbar user={user} /> */}
      <SiteHeader user={user} />
      <div className="container py-2">
        <LandingPage />
      </div>
      <SiteFooter />
      {/* <Footer /> */}
      <page />
    </main>
  );
}
