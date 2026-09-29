import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implantes Dentales en Palermo | Alta Complejidad",
  description: "Recuperá tu sonrisa con implantes dentales de titanio y tecnología de escaneo 3D. Cirugía mínimamente invasiva guiada por computadora en Palermo, CABA.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
