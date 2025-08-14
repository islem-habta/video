# 🎥 SnapCast - Screen Recording & Video Sharing Platform

<div align="center">
  <img src="public/assets/icons/logo.svg" alt="SnapCast Logo" width="120" height="120">
  
  <h1>SnapCast</h1>
  <p><strong>Modern Screen Recording & Video Sharing Platform</strong></p>
  
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Bunny.net-F47326?style=for-the-badge&logo=bunnyvideo&logoColor=white" alt="Bunny.net" />
  </div>
  
  <p>
    <a href="#live-demo">Live Demo</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#deployment">Deployment</a>
  </p>
</div>

## 📖 Overview

SnapCast is a full-stack web application that enables users to record their screen, upload videos, and share them with others. Built with modern web technologies, it provides a seamless experience for content creators, educators, and anyone who needs to share screen recordings.

### ✨ Key Features

- 🎬 **Screen Recording**: Capture your screen directly in the browser
- 📤 **Video Upload**: Upload existing video files with drag-and-drop
- 🔐 **User Authentication**: Secure login with Google OAuth
- 🌐 **Video Sharing**: Share videos via unique links
- 🔍 **Search & Discovery**: Find videos with intelligent search
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Modern UI**: Beautiful, intuitive interface
- 🔒 **Privacy Controls**: Set videos as public or private
- 📊 **Video Analytics**: Track views and engagement
- 🎯 **AI Transcripts**: Automatic video transcription

## 🚀 Live Demo

**Coming Soon** - Deploy your own instance or check out the live demo at [snapcast.vercel.app]([https://snapcast.vercel.app](https://video-blush-nu.vercel.app/))

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React with concurrent features

### Backend & Database
- **Next.js API Routes** - Serverless API endpoints
- **Xata** - Serverless PostgreSQL database
- **Drizzle ORM** - Type-safe database queries
- **Better Auth** - Authentication library

### Video & Storage
- **Bunny.net** - Video streaming and storage
- **Bunny CDN** - Global content delivery
- **Bunny Stream** - Video processing and delivery

### Security & Performance
- **ArcJet** - Bot protection and rate limiting
- **Next.js Middleware** - Request processing
- **Turbopack** - Fast bundling and development

## 📋 Features

### 🎬 Screen Recording
- Browser-based screen capture
- Audio recording support
- Multiple quality options
- Real-time preview

### 📤 Video Management
- Drag-and-drop uploads
- Video format support (MP4, WebM, MOV)
- Automatic thumbnail generation
- Video metadata extraction

### 👤 User System
- Google OAuth authentication
- User profiles and settings
- Video ownership and permissions
- Activity history

### 🔍 Discovery
- Advanced search functionality
- Video categorization
- Trending videos
- User recommendations

### 🎨 User Interface
- Modern, responsive design
- Dark/light mode support
- Intuitive navigation
- Mobile-optimized

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/islem-habta/video.git
   cd video
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # App Configuration
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # Database (Xata)
   XATA_API_KEY=your_xata_api_key
   DATABASE_URL_POSTGRES=your_database_url
   
   # Authentication (Google OAuth)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # Better Auth
   BETTER_AUTH_SECRET=your_better_auth_secret
   BETTER_AUTH_URL=http://localhost:3000
   
   # Video Storage (Bunny.net)
   BUNNY_STORAGE_ACCESS_KEY=your_bunny_storage_key
   BUNNY_LIBRARY_ID=your_bunny_library_id
   BUNNY_STREAM_ACCESS_KEY=your_bunny_stream_key
   
   # Security (ArcJet)
   ARCJET_API_KEY=your_arcjet_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Environment Variables for Production**
   ```env
   NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
   XATA_API_KEY=your_production_xata_key
   DATABASE_URL_POSTGRES=your_production_database_url
   GOOGLE_CLIENT_ID=your_production_google_client_id
   GOOGLE_CLIENT_SECRET=your_production_google_client_secret
   BETTER_AUTH_SECRET=your_production_better_auth_secret
   BETTER_AUTH_URL=https://your-app.vercel.app
   BUNNY_STORAGE_ACCESS_KEY=your_production_bunny_storage_key
   BUNNY_LIBRARY_ID=your_production_bunny_library_id
   BUNNY_STREAM_ACCESS_KEY=your_production_bunny_stream_key
   ARCJET_API_KEY=your_production_arcjet_api_key
   ```

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js
- **Railway**: Great for full-stack applications
- **DigitalOcean App Platform**: Scalable cloud deployment

## 🔧 API Services Setup

### 1. Xata Database
1. Sign up at [xata.io](https://xata.io)
2. Create a new database
3. Get your API key and database URL
4. Add to environment variables

### 2. Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs

### 3. Bunny.net
1. Sign up at [bunny.net](https://bunny.net)
2. Create a storage zone
3. Create a stream library
4. Get your API keys
5. Configure CDN settings

### 4. ArcJet Security
1. Sign up at [arcjet.com](https://arcjet.com)
2. Create a new project
3. Get your API key
4. Configure security rules

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Utility functions
├── drizzle/              # Database schema and migrations
├── public/               # Static assets
└── constants/            # Application constants
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Video streaming powered by [Bunny.net](https://bunny.net)
- Database by [Xata](https://xata.io)
- Authentication by [Better Auth](https://better-auth.com)
- Security by [ArcJet](https://arcjet.com)

## 📞 Support

If you have any questions or need help:

- 📧 Email: support@snapcast.com
- 💬 Discord: [Join our community](https://discord.gg/snapcast)
- 🐛 Issues: [GitHub Issues](https://github.com/islem-habta/video/issues)

---

<div align="center">
  <p>Made with ❤️ by the SnapCast team</p>
  <p>
    <a href="https://github.com/islem-habta/video">GitHub</a> •
    <a href="https://snapcast.vercel.app">Live Demo</a> •
    <a href="https://docs.snapcast.com">Documentation</a>
  </p>
</div>
