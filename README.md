# CloudVault - Modern Cloud Storage with Authentication & Real-time Sync  

## Overview  

**CloudVault** is a secure cloud storage solution built with **Clerk** for authentication and **Convex** for real-time data synchronization. It provides a seamless experience for storing, accessing, and sharing files with end-to-end encryption and instant updates across devices.  

## Key Features  

✅ **Secure Authentication** – Powered by **Clerk** for passwordless login, multi-factor authentication (MFA), and user management.  
✅ **Real-Time File Sync** – **Convex** ensures instant updates across all connected devices.  
✅ **End-to-End Encryption** – Files are encrypted before storage for maximum security.  
✅ **File Versioning** – Automatic backup of previous versions with easy restoration.  
✅ **Collaborative Workspaces** – Share folders and edit documents in real time.  
✅ **Cross-Platform** – Web, desktop, and mobile support (iOS & Android coming soon).  

---

## Getting Started  

### Prerequisites  

- Node.js `18.x` or later  
- npm `9.x` or later  
- A **Clerk** account (for authentication)  
- A **Convex** project (for backend & real-time sync)  

### Installation  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/judeotine/cloudvault.git
   cd cloudvault
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Rename `.env.example` to `.env` and configure:  
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
   ```

4. **Run the development server:**  
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.  

---

## Deployment  

### Vercel (Recommended)  
1. Push your project to a GitHub/GitLab repository.  
2. Import it into Vercel and set the required environment variables.  
3. Deploy!  

### Self-Hosting  
1. Build the project:  
   ```bash
   npm run build
   ```
2. Start the production server:  
   ```bash
   npm start
   ```

---

## Configuration  

### Clerk Setup  
1. Sign up at [Clerk](https://clerk.com).  
2. Create a new application and configure authentication methods (Email, Google, GitHub, etc.).  
3. Add your domain in Clerk’s dashboard.  

### Convex Setup  
1. Install the Convex CLI:  
   ```bash
   npm install -g convex
   ```
2. Log in and create a new project:  
   ```bash
   convex init
   ```
3. Deploy your Convex backend:  
   ```bash
   convex deploy
   ```

---

## Usage  

1. **Sign up** using Clerk (email, Google, or other providers).  
2. **Upload files** via drag-and-drop or the file picker.  
3. **Organize files** into folders and share them with collaborators.  
4. **Access from any device** – changes sync instantly.  

---

## API & Development  

- **Clerk API**: [docs.clerk.com](https://clerk.com/docs)  
- **Convex API**: [docs.convex.dev](https://docs.convex.dev)  
- **Frontend**: Next.js with TypeScript  
- **Database**: Convex (built on PostgreSQL)  
---

## Security  

- **Report vulnerabilities**: security@cloudvault.dev  
- **Encryption**: Files are encrypted using AES-256.  
- **Compliance**: GDPR-ready with data residency options.  
---

### **CloudVault – Store. Sync. Secure.** 🚀