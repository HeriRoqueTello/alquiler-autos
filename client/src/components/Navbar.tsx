"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Calendar, Phone, User, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logos/svgLogo";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LoginForm } from "./login-form";
import { RegistroForm } from "./registro-form";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuthStore } from "@/stores/auth";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Económicos",
    href: "/vehiculos/economicos",
    description: "Autos compactos y eficientes para viajes urbanos.",
  },
  {
    title: "SUVs",
    href: "/vehiculos/suvs",
    description: "Vehículos espaciosos ideales para viajes familiares.",
  },
  {
    title: "De lujo",
    href: "/vehiculos/lujo",
    description: "Experimenta el máximo confort con nuestra flota premium.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Simulamos un estado de autenticación
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);

  const isActive = (href: string) => pathname === href;
  const handleLogout = () => {
    // Aquí iría la lógica real de cierre de sesión
    logout();
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <DialogTitle>
              <VisuallyHidden>Menú de navegación</VisuallyHidden>
            </DialogTitle>
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Logo />
              <span className="text-xl font-bold">AutoRent</span>
            </Link>
            <div className="mt-8 flex flex-col gap-4">
              <MobileNavItem
                href="/"
                icon={<Car className="mr-2 h-4 w-4" />}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </MobileNavItem>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start font-medium"
                >
                  Vehículos
                </Button>
                <div className="pl-4 space-y-2">
                  {components.map((component) => (
                    <MobileNavItem
                      key={component.title}
                      href={component.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {component.title}
                    </MobileNavItem>
                  ))}
                </div>
              </div>
              <MobileNavItem
                href="/reserva"
                icon={<Calendar className="mr-2 h-4 w-4" />}
                onClick={() => setIsOpen(false)}
              >
                Reservas
              </MobileNavItem>
              <MobileNavItem
                href="/contacto"
                icon={<Phone className="mr-2 h-4 w-4" />}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </MobileNavItem>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
          <span className="hidden font-bold sm:inline-block">AutoRent</span>
        </Link>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/") && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Vehículos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                <Link href="/reserva" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/reservas") &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Reservas
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contacto" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/contacto") &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          {isAuth && profile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt={profile.nombre}
                    />
                    <AvatarFallback>{profile.nombre.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="text-sm font-medium">{profile.nombre}</div>
                  <div className="text-xs text-muted-foreground">
                    {profile.email}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/perfil">Mi Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mis-reservas">Mis Reservas</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                {
                  // Aquí irían las opciones de administrador
                  profile.rol === "admin" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )
                }

                <DropdownMenuItem onClick={handleLogout}>
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  Iniciar sesión
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Acceder a tu cuenta</DialogTitle>
                  <DialogDescription>
                    Inicia sesión o crea una nueva cuenta para acceder a todas
                    las funciones.
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Iniciar sesión</TabsTrigger>
                    <TabsTrigger value="registro">Registro</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <LoginForm />
                  </TabsContent>
                  <TabsContent value="registro">
                    <RegistroForm />
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}

const MobileNavItem = ({
  href,
  children,
  icon,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={onClick}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start",
          isActive && "bg-accent text-accent-foreground"
        )}
      >
        {icon}
        {children}
      </Button>
    </Link>
  );
};

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
  );
});
ListItem.displayName = "ListItem";
