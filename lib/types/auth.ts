/**
 * Authentication Types
 * Defines TypeScript interfaces for authentication operations
 */

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
  error?: string;
}

export interface SocialProvider {
  provider: 'google' | 'github' | 'discord' | 'apple';
}