# Ashish Dev Studio Landing Page

A professional, modern landing page for a freelance web development studio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Responsive design that works on all devices
- Smooth animations with Framer Motion
- Modern UI with Tailwind CSS
- Professional sections including services, process, tech stack, and testimonials
- Fully functional navigation with mobile menu

## Tech Stack

- **Framework**: React.js with Vite
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ashish-dev-studio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

### Previewing the Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── WhyChooseMe.jsx
│   ├── HowIWork.jsx
│   ├── TechStack.jsx
│   ├── Testimonials.jsx
│   ├── FinalCTA.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```

## Customization

To customize the content:

1. Edit the component files in `src/components/` to change the text and content
2. Modify `src/App.jsx` to reorder or add sections
3. Update the color scheme in `tailwind.config.js` if needed

## Deployment

This site can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## License

This project is licensed under the MIT License.