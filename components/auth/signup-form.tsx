"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import * as z from "zod"
import Link from "next/link"

const SignupFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  confirmPassword: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak cocok",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof SignupFormSchema>;

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const signupResult = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
      });

      if (signupResult.error) {
        console.error("Signup error:", signupResult.error);
        toast.error(signupResult.error.message || "Pendaftaran gagal. Silakan coba lagi.");
        return;
      }

      // Then automatically sign in the user
      const signinResult = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (signinResult.error) {
        console.error("Auto-login error:", signinResult.error);
        toast.error("Akun berhasil dibuat, tetapi gagal login otomatis. Silakan login manual.");
        router.push("/login");
        return;
      }

      toast.success("Akun berhasil dibuat dan Anda sudah login!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  const handleSocialLogin = async () => {
    try {
      const result = await authClient.signIn.social({ provider: "google" });

      if (result.error) {
        console.error("Social signup error:", result.error);
        toast.error(result.error.message || "Pendaftaran dengan Google gagal. Silakan coba lagi.");
      } else {
        toast.success("Akun berhasil dibuat dengan Google!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Social signup error:", error);
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
        <div className="flex flex-col items-center gap-1 text-center mb-2">
          <h1 className="text-2xl font-bold">Buat akun Anda</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Isi formulir di bawah untuk membuat akun baru
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field dengan Controller */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="name">Nama Lengkap</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Email Field dengan Controller */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Password Field dengan Controller */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Confirm Password Field dengan Controller */}
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="confirm-password">Konfirmasi Sandi</FieldLabel>
                <Input
                  {...field}
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Submit Button */}
        <Field>
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Membuat Akun..." : "Buat Akun"}
          </Button>
        </Field>

        <FieldSeparator>Atau lanjutkan dengan</FieldSeparator>

        {/* Google Signup */}
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
            Sign up with Google
          </Button>
          <FieldDescription className="text-center">
            Sudah punya akun?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Masuk
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
