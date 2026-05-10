# Parth's Premium Portfolio

A modern, high-end personal portfolio built for a Computer Science student specializing in AI, Data Science, and Machine Learning.

## Features
- **Tech Stack**: React, Vite, Tailwind CSS (v4), Framer Motion.
- **Design**: Minimalist, Apple-inspired, professional dark theme.
- **Animations**: Smooth scroll-triggered transitions and micro-interactions.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Components**: Reusable, clean, and well-documented structure.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```

## Deployment

### Vercel
1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite and deploy your site.

### Customization

#### Replacing Placeholder Content
- **Personal Details**: Update `src/components/About.jsx` and `src/components/Hero.jsx`.
- **Skills**: Modify the `skills` array in `src/components/Skills.jsx`.
- **Projects**: Update the `projects` array in `src/components/Projects.jsx`.
- **Hackathons**: Modify the `hackathons` array in `src/components/Hackathons.jsx`.
- **Contact**: Set up your [EmailJS](https://www.emailjs.com/) account and update the credentials in `src/components/Contact.jsx`.

#### Changing Theme Colors
Tailwind v4 theme variables are defined in `src/index.css` under the `@theme` block.

```css
@theme {
  --color-brand-primary: #3b82f6; /* Accent color */
  --color-bg-dark: #050505;      /* Background color */
}
```

## License
MIT
