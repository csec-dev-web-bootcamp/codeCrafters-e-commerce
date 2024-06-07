import Footer from "@app/client/components/global/footer";
import Navbar from "@app/client/components/global/navbar";
import { SiteFooter } from "@app/client/components/layout/site-footer";
import { SiteHeader } from "@app/client/components/layout/site-header";
export default function Layout({ children }) {
  return (
    <div>
      {/* <SiteHeader /> */}
      {children}
      {/* <SiteFooter /> */}
    </div>
  );
}
