import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Pengguna",
  description: "Kelola detail informasi dan pengaturan akun Anda.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}