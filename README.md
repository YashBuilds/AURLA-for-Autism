# 🧩 ARULA for Autism - Next.js Landing Page

A modern, fully responsive landing page for ARULA for Autism therapy services built with **Next.js 14**, **Tailwind CSS**, and **Google Sheets API** integration for real-time form submission tracking.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![React](https://img.shields.io/badge/React-18-61dafb)
![Status](https://img.shields.io/badge/Status-Live-success)

## 🌟 Features

- ⚡ **Next.js 14 App Router** - Modern React framework with server components
- 🎨 **Tailwind CSS** - Utility-first styling for rapid development
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 📊 **Google Sheets Integration** - Real-time form submission tracking
- 🔒 **API Routes** - Secure server-side form handling
- ♿ **Accessible** - WCAG compliant design
- 🚀 **Optimized Performance** - Fast loading with Next.js optimization
- 🎭 **Smooth Animations** - Framer Motion & CSS animations

## 📸 Screenshots

### Desktop View
![Desktop Preview](public/images/desktop-preview.png)

### Mobile View
![Mobile Preview](public/images/mobile-preview.png)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Google Sheets API
- **Deployment**: Vercel (recommended)
- **Icons**: React Icons
- **HTTP Client**: Axios

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Google Cloud Console account
- Google Sheet created

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/arula-autism-landing-page.git
cd arula-autism-landing-page
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Set Up Google Sheets API

#### Step A: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project: "ARULA Contact Form"
3. Enable **Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

#### Step B: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Name it: "arula-sheets-service"
4. Click "Create and Continue"
5. Skip role assignment (click "Continue")
6. Click "Done"

#### Step C: Generate Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON" format
5. Download the JSON file (keep it secure!)

#### Step D: Share Google Sheet

1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email (from JSON file: `client_email`)
4. Give it "Editor" access

#### Step E: Get Sheet ID

From your Google Sheet URL:
\`https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit\`

Copy the `SHEET_ID_HERE` part

### 4. Configure Environment Variables

Create `.env.local` in the root directory:

\`\`\`env
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_sheet_id_here
\`\`\`

**Important:** 
- Copy `client_email` and `private_key` from your downloaded JSON file
- Keep the quotes around the private key
- Keep the `\n` characters in the private key

### 5. Set Up Google Sheet Headers

In your Google Sheet, add these headers in Row 1:

| Timestamp | Name | Email | Phone | Child Age | Interest | Message |
|-----------|------|-------|-------|-----------|----------|---------|

### 6. Run Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 7. Test the Form

1. Fill out the contact form
2. Submit it
3. Check your Google Sheet - you should see a new row!

## 📁 Project Structure

\`\`\`
arula-autism-landing-page/
│
├── public/                      # Static assets
│   ├── favicon.ico
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js     # API endpoint for form submissions
│   │   ├── globals.css          # Global styles
│   │   ├── layout.js            # Root layout component
│   │   └── page.js              # Home page
│   │
│   ├── components/
│   │   ├── BackgroundShapes.jsx # Animated background
│   │   ├── ContactForm.jsx      # Contact form with validation
│   │   ├── Features.jsx         # Features section
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Hero.jsx             # Hero section
│   │   └── Navigation.jsx       # Navigation bar
│   │
│   └── lib/
│       └── googleSheets.js      # Google Sheets API helper
│
├── .env.local                   # Environment variables (not in git)
├── .gitignore
├── next.config.js               # Next.js configuration
├── package.json
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
6. Click "Deploy"

Your site will be live in minutes!

### Deploy to Netlify

\`\`\`bash
npm run build
\`\`\`

Then deploy the `.next` folder to Netlify.

## 📊 Google Sheets Data Structure

Each form submission creates a new row with:

- **Timestamp**: ISO 8601 format (e.g., 2024-10-07T10:30:00.000Z)
- **Name**: Full name of the person
- **Email**: Email address
- **Phone**: Phone number
- **Child Age**: Age of the child (optional)
- **Interest**: Selected inquiry type
- **Message**: Custom message (optional)

## 🎯 Key Features Breakdown

### Hero Section
- Animated headline with gradient text
- Star rating display (4.5/5)
- Trust badge showing 200+ families
- Dual CTA buttons
- SVG illustration with animations

### Features Section
- 6 feature cards with icons
- Hover animations and effects
- Responsive grid layout
- Icon-based visual hierarchy

### Contact Form
- Real-time validation
- Loading states with spinner
- Success/error messages
- All fields properly labeled
- Accessible form inputs

### Google Sheets Integration
- Secure API route handling
- Server-side validation
- Error handling
- Timestamped entries

## 🔒 Security

- Environment variables for sensitive data
- Server-side API routes (not exposed to client)
- Input validation and sanitization
- CORS handling
- Rate limiting (can be added)

## 📈 Performance Optimizations

- Next.js automatic code splitting
- Image optimization with Next/Image
- CSS modules for scoped styling
- Tree-shaking with ES modules
- Server-side rendering (SSR)

## 🧪 Testing

\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

- **Primary**: `#3d2e7c` (Deep Purple)
- **Primary Light**: `#5a4a9c`
- **Accent Pink**: `#ffc0e3`
- **Accent Light**: `#ffe8f5`
- **Background**: `#fef3f9`
- **Text Dark**: `#2d1f4d`
- **Text Muted**: `#6b5b8c`

## 🐛 Troubleshooting

### Form not submitting?
- Check `.env.local` variables are correct
- Verify service account has access to sheet
- Check browser console for errors

### Google Sheets not updating?
- Ensure Sheet ID is correct
- Verify sheet name is "Sheet1" or update in code
- Check service account email has Editor access

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (18+ required)
- Delete `.next` folder and rebuild

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspired by Arula for Autism official website
- Built with Next.js and Tailwind CSS
- Icons from React Icons library
- Fonts from Google Fonts (Poppins)

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: support@arula.com

---

⭐ **Star this repo** if you found it helpful!

Made with ❤️ for families supporting autism therapy
\`\`\`