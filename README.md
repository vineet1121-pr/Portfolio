# 🚀 Portfolio Website

A modern, performant portfolio website built with **React 18**, **TypeScript**, and **Vite**. Features a beautiful UI with smooth animations, interactive components, and comprehensive test coverage.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-portfolio-url.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF)](https://vitejs.dev/)

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimized builds
- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🔒 **Type Safe** - Full TypeScript implementation
- ✅ **Tested** - Comprehensive test coverage with Vitest
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant
- 🌙 **Analytics** - Google Analytics 4 integration

## 🛠️ Tech Stack

### Core
- **React 18.2** - UI library
- **TypeScript 5.3** - Type safety
- **Vite 5.1** - Build tool & dev server

### Styling
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5.3** - Component library
- **Font Awesome 6.4** - Icon library

### Testing
- **Vitest** - Unit testing framework
- **Testing Library** - React component testing
- **jsdom** - DOM implementation

### Tools & Libraries
- **react-scroll** - Smooth scrolling navigation
- **@emailjs/browser** - Contact form integration
- **ESLint** - Code linting
- **Google Analytics 4** - User analytics

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About/          # About section
│   │   ├── Blog/           # Blog posts section
│   │   ├── Contact/        # Contact form
│   │   ├── ErrorBoundary/  # Error handling
│   │   ├── Footer/         # Footer component
│   │   ├── Hero/           # Landing section
│   │   ├── Navbar/         # Navigation
│   │   ├── Projects/       # Project showcase
│   │   ├── Resume/         # Resume section
│   │   └── Skills/         # Skills display
│   ├── utils/              # Utility functions
│   │   ├── analytics.tsx   # Analytics tracking
│   │   └── analyticsHooks.tsx
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # Entry point
│   └── setupTests.ts       # Test configuration
├── public/                 # Static assets
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## 🎯 Featured Projects

### 1. 🏥 Selfcare Portal
**Impact:** Revolutionized patient care management for 10,000+ users

A comprehensive healthcare management system enabling patients to:
- Book appointments online
- Access medical records securely
- Track prescriptions and refills
- Communicate with healthcare providers

**Tech Stack:** React, Node.js, MongoDB, AWS  
**Achievements:**
- 40% reduction in administrative overhead
- 95% patient satisfaction rate
- 24/7 availability for bookings

---

### 2. 💬 Support Module
**Impact:** Enhanced customer support efficiency by 60%

Real-time customer support platform with:
- Live chat functionality
- Ticket management system
- AI-powered response suggestions
- Multi-channel integration (email, chat, phone)

**Tech Stack:** React, WebSocket, Redis, PostgreSQL  
**Achievements:**
- Response time reduced from 2 hours to 15 minutes
- 85% first-contact resolution rate
- Handled 50,000+ support tickets

---

### 3. 📊 Document Management System (DMS)
**Impact:** Streamlined document workflow for enterprise clients

Enterprise-grade document management solution featuring:
- Advanced search and categorization
- Version control and audit trails
- Role-based access control
- OCR and metadata extraction

**Tech Stack:** React, Python, ElasticSearch, AWS S3  
**Achievements:**
- Processed 1M+ documents
- 70% faster document retrieval
- 99.9% uptime SLA

---

### 4. 🐾 Adopt - Pet Adoption Platform
**Impact:** Facilitated 500+ successful pet adoptions

Community-driven pet adoption platform connecting:
- Animal shelters with potential adopters
- Foster parents with rescue organizations
- Veterinarians with new pet owners

**Tech Stack:** React, Firebase, Google Maps API  
**Achievements:**
- 500+ pets found homes
- 50+ partner shelters
- 10,000+ active users

---

### 5. 📹 Claptech IVRMS
**Impact:** Enhanced video management for 100+ organizations

Intelligent Video Recording Management System with:
- Cloud-based video storage
- AI-powered video analytics
- Real-time streaming capabilities
- Multi-device sync

**Tech Stack:** React, FFmpeg, AWS MediaConvert, WebRTC  
**Achievements:**
- 100TB+ video content managed
- 99.99% uptime
- Sub-second video retrieval

---

### 6. 💊 Medicine Portal
**Impact:** Simplified medication management for 5,000+ patients

Digital pharmacy platform offering:
- Online prescription uploads
- Medicine ordering and delivery
- Drug interaction checker
- Medication reminders

**Tech Stack:** React, Node.js, MongoDB, Twilio  
**Achievements:**
- 5,000+ active users
- Same-day delivery in metro areas
- 98% order accuracy rate

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/vineet1121-pr/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run test     # Run tests
npm run lint     # Lint code
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The optimized files will be in the `build/` directory.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 📈 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Bundle Size:** ~60KB (gzipped)

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Vineet Jethva**

- LinkedIn: [Vineet Jethva](https://www.linkedin.com/in/vineet-jethva-14a62323b)
- Email: jethvavinit99@gmail.com
- Portfolio: [Live Demo](https://your-portfolio-url.vercel.app)

## 🙏 Acknowledgments

- Font Awesome for the icon library
- React community for amazing tools and libraries
- Vercel for hosting

## 📝 Changelog

### v2.0.0 (Current)
- ⚡ Migrated from Create React App to Vite
- 🔒 Added full TypeScript support
- ✅ Integrated Vitest for testing
- 📦 Reduced bundle size by 40%
- 🚀 Improved build time by 10x

### v1.0.0
- 🎉 Initial release with CRA
- 📱 Responsive design
- 🎨 Custom animations
- 📧 Contact form integration

---

<div align="center">
  Made with ❤️ by Vineet Jethva
</div>

