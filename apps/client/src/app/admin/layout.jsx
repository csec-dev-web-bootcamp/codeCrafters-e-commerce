import SideNavbar from "@app/client/components/SideNavbar";
export default function RootLayout({ children }) {
  return (
    <div className="flex">
      {/* sidebar */}
      {/* <p className="border">Sidebar</p> */}
      <SideNavbar />
      {/* main page */}
      <div className="p-8 w-full">{children}</div>
    </div>
  );
}
