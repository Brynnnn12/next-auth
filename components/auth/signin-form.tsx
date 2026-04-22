"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import * as z from "zod";
import Link from "next/link";

// Schema dengan pesan error custom
const LoginFormSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        console.error("Login error:", result.error);
        toast.error(result.error.message || "Login gagal. Silakan coba lagi.");
      } else {
        toast.success("Login berhasil!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  const handleSocialLogin = async () => {
    try {
      const result = await authClient.signIn.social({ provider: "google" });

      if (result.error) {
        console.error("Social login error:", result.error);
        toast.error(result.error.message || "Login dengan Google gagal. Silakan coba lagi.");
      } else {
        toast.success("Login berhasil!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Social login error:", error);
      toast.error("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Masuk ke akun Anda</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Masukkan email Anda di bawah untuk masuk ke akun
          </p>
        </div>

        {/* Email Field dengan Controller */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="m@example.com"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Password Field dengan Controller */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Lupa kata sandi?
                </a>
              </div>
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="••••••"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Submit Button */}
        <Field>
          <Button 
            type="submit" 
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Sedang masuk..." : "Masuk"}
          </Button>
        </Field>

        <FieldSeparator>Atau lanjutkan dengan</FieldSeparator>

        {/* Google Login */}
        <Field>
          <Button 
            variant="outline" 
            type="button"
            className="w-full gap-2"
            onClick={handleSocialLogin}
          >
            <div className="flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs font-bold text-white">
              G
            </div>
            Login with Google
          </Button>
          <FieldDescription className="text-center">
            Belum punya akun?{" "}
            <Link href="/register" className="underline underline-offset-4">
              Daftar
            </Link>
          </FieldDescription>
        </Field>

        {/* Tampilkan error global jika ada */}
        {form.formState.errors.root && (
          <FieldError errors={[form.formState.errors.root]} />
        )}
      </FieldGroup>
    </form>
  );
}