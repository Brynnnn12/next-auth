"use server";

import { auth } from "@/lib/auth";
import type { SignInCredentials, SignUpCredentials, AuthResponse } from "@/lib/types/auth";

export const signIn = async (credentials: SignInCredentials): Promise<AuthResponse> => {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email: credentials.email,
        password: credentials.password,
      },
    });

    return {
      success: true,
      message: "Sign in successful",
      user: result?.user ? {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name || "",
      } : undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Sign in failed",
    };
  }
};

export const signUp = async (credentials: SignUpCredentials): Promise<AuthResponse> => {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        email: credentials.email,
        password: credentials.password,
        name: credentials.name,
      },
    });

    return {
      success: true,
      message: "Account created successfully",
      user: result?.user ? {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name || "",
      } : undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Sign up failed",
    };
  }
};

export const signOut = async (): Promise<AuthResponse> => {
  try {
    await auth.api.signOut();

    return {
      success: true,
      message: "Sign out successful",
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Sign out failed",
    };
  }
};