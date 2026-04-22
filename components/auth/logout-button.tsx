"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await authClient.signOut();
            toast.success("Berhasil logout!");
            router.push("/login");
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("Gagal logout. Silakan coba lagi.");
        }
    };

    return (
        <Button onClick={handleLogout} variant="outline">
            Logout
        </Button>
    );
}