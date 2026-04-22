# 🔐 Next.js Authentication Template

> **Ready-to-use authentication template** built with modern technologies by **brynnnn12**

A complete, production-ready authentication system built with Next.js 16, featuring email/password authentication, Google OAuth, and a beautiful UI with Shadcn/UI components.

## ✨ Features

### 🔐 Authentication
- **Email & Password**: Secure registration and login
- **Google OAuth**: Social authentication with Google
- **Auto-login**: Seamless registration → login flow
- **Session Management**: Secure JWT-based sessions
- **Protected Routes**: Automatic redirects for unauthenticated users

### 🎨 UI/UX
- **Shadcn/UI**: Beautiful, accessible components
- **Responsive Design**: Mobile-first approach
- **Indonesian Localization**: Full Indonesian language support
- **Toast Notifications**: User-friendly feedback with Sonner
- **Form Validation**: Real-time validation with Zod
- **Loading States**: Professional loading indicators

### 🛠️ Tech Stack
- **Framework**: Next.js 16.2.4 (App Router)
- **Database**: PostgreSQL with Neon
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **UI Library**: Shadcn/UI + Radix UI
- **Styling**: Tailwind CSS
- **Validation**: Zod + React Hook Form
- **Notifications**: Sonner
- **TypeScript**: Full type safety

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon recommended)
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brynnnn12/next-auth.git
   cd next-auth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env` and fill in your values:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@host:port/database"

   # Better Auth
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"

   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up Google OAuth**

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
   - Add authorized JavaScript origin: `http://localhost:3000`

5. **Run database migrations**
   ```bash
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-auth/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/               # Login page
│   │   └── register/            # Registration page
│   ├── api/auth/[...all]/       # Better Auth API routes
│   ├── dashboard/               # Protected dashboard
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── auth/                    # Authentication components
│   │   ├── signin-form.tsx     # Login form
│   │   ├── signup-form.tsx     # Registration form
│   │   └── logout-button.tsx   # Logout component
│   └── ui/                      # Shadcn/UI components
├── lib/                         # Utility libraries
│   ├── auth.ts                  # Better Auth configuration
│   ├── auth-client.ts           # Client-side auth
│   ├── types/                   # TypeScript definitions
│   └── utils.ts                 # Utility functions
├── db/                          # Database configuration
│   ├── drizzle.ts              # Drizzle ORM setup
│   └── schema.ts               # Database schema
└── migrations/                  # Database migrations
```

## 🔧 Configuration

### Database Schema

The application uses the following database tables:
- `user`: User accounts
- `session`: User sessions
- `account`: OAuth provider accounts
- `verification`: Email verification tokens

### Authentication Flow

1. **Registration**: User creates account → Auto-login → Dashboard
2. **Login**: Email/password or Google OAuth → Dashboard
3. **Session**: JWT-based session management
4. **Logout**: Clear session → Redirect to login

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.js`
- Customize Shadcn/UI components in `components/ui/`

### Authentication
- Edit auth configuration in `lib/auth.ts`
- Modify validation rules in form components
- Add additional OAuth providers

### Database
- Update schema in `db/schema.ts`
- Run migrations: `npx drizzle-kit generate && npx drizzle-kit migrate`

## 📱 Pages

### Public Pages
- `/` - Landing page
- `/login` - Login page
- `/register` - Registration page

### Protected Pages
- `/dashboard` - User dashboard (requires authentication)

## 🔒 Security Features

- **Password Hashing**: Secure password storage
- **Session Security**: HTTP-only cookies, secure flags
- **CSRF Protection**: Built-in CSRF tokens
- **Rate Limiting**: Request rate limiting
- **Input Validation**: Comprehensive input sanitization

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
- **Railway**: PostgreSQL + Next.js hosting
- **Netlify**: With external database
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.com/) - The React framework
- [Better Auth](https://better-auth.com/) - Authentication library
- [Shadcn/UI](https://ui.shadcn.com/) - UI components
- [Neon](https://neon.tech/) - PostgreSQL hosting
- [Drizzle ORM](https://orm.drizzle.team/) - Database toolkit

---

**Built with ❤️ by brynunnn12**

*Ready to use authentication template for modern Next.js applications*
