"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Buiding-Construction",
    href: "/docs/primitives/alert-dialog",
    description:
      "we specialize in connecting you with highly skilled workers and professional talent for all your building construction needs. Whether you're planning a small renovation or a large-scale construction project, our team ensures you have the right people to bring your vision to life.",
  },
  {
    title: "Home Appliances Services",
    href: "/docs/primitives/hover-card",
    description:
      "we provide reliable, efficient, and professional home appliance services to keep your household running smoothly. From quick repairs to regular maintenance, our skilled technicians are here to ensure your appliances work like new.",
  },
  {
    title: "Event Management",
    href: "/docs/primitives/progress",
    description:
      "we bring your events to life with unparalleled expertise and creativity. From planning and catering to sounds, lighting, and decoration, we handle every detail to ensure your special occasion is unforgettable. Whether it’s a wedding, corporate event, birthday, or any celebration, our team is here to turn your vision into reality.",
  },
  {
    title: "Travels & Transport",
    href: "/docs/primitives/scroll-area",
    description: "we make every journey smooth, comfortable, and hassle-free. Whether you need reliable transport for daily commutes, corporate travel, or planning a memorable trip, we provide top-notch services tailored to your needs.",
  },
  {
    title: "Tailor & Beauty Parlour",
    href: "/docs/primitives/tabs",
    description:
      "we bring elegance and beauty to your life with expert tailoring, exquisite embroidery, and premium beauty services. Whether you need a custom outfit, intricate designs, or a pampering beauty session.",
  },
  {
    title: "Tutions",
    href: "/docs/primitives/tooltip",
    description:
      "we believe that every student has the potential to excel. Our personalized tuition services connect you with experienced tutors who are passionate about teaching and committed to helping students achieve academic success.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-100 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
