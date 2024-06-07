import Footer from "@app/client/components/global/footer";
import Navbar from "@app/client/components/global/navbar";
import { SiteFooter } from "@app/client/components/layout/site-footer";
import { SiteHeader } from "@app/client/components/layout/site-header";
import { getMe } from "@app/client/data/user.data";
export default async function Layout({ children }) {
  const user = await getMe();
  console.log({ user });
  return (
    <main className="w-full ">
      <SiteHeader user={user} />
      <div className="container py-2">{children}</div>
      <SiteFooter />
    </main>
  );
}
