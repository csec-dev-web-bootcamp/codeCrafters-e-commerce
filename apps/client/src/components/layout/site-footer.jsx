import Link from "next/link";

// import { siteConfig } from "@/config/site";

import { buttonVariants } from "@app/client/components/ui/button";
// import { JoinNewsletterForm } from "@app/client/components/forms/join-newsletter-form";
import { Icons } from "@app/client/components/icons";
import { cn } from "@app/client/lib/utils";
import { Shell } from "../shell/shell";
// import { ModeToggle } from "@app/client/components/layouts/mode-toggle";
// import { Shell } from "@app/client/components/shells/shell";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell>
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Link href="/" className="flex w-fit items-center space-x-2">
              <Icons.bot className="size-6" aria-hidden="true" />
              <span className="font-bold">TechShop</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4"
          >
            <div className="space-y-3">
              <h4 className="text-base font-medium">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Products
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Products</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Mobiles
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Laptops
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Pc
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Hard Drives
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Categories</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Laptops
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Mobile
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Gaming Headset
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Airpods
                    <span className="sr-only">home page</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
          </section>
          <section
            id="newsletter"
            aria-labelledby="newsletter-heading"
            className="space-y-3"
          >
            <h4 className="text-base font-medium">Leave Your Feedback Here</h4>
            {/* <JoinNewsletterForm /> */}
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <Link
              href="https://twitter.com/sadmann17"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              CodeCrafters
              <span className="sr-only">Twitter</span>
            </Link>
            .
          </div>
          <div className="flex items-center space-x-1">
            <Link
              // href={siteConfig.links.github}
              href="/https://github.com/csec-dev-web-bootcamp/codeCrafters-e-commerce"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.gitHub className="size-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            {/* <ModeToggle /> */}
          </div>
        </section>
      </Shell>
    </footer>
  );
}
