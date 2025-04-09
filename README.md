# Travel Blog

A personal travel blog built with React, showcasing travel experiences and destinations.

## Features

- Responsive design for both desktop and mobile devices
- Home page with a list of blog posts
- Detailed post pages with full content
- About page with information about the blog
- Contact page with a form (frontend only)

## Technologies Used

- React (with TypeScript)
- React Router for navigation
- CSS for styling
- Vite for build and development

## Project Structure

```
travel-blog/
├── public/
│   └── assets/
│       └── images/       # Images for blog posts
├── src/
│   ├── assets/           # Static assets
│   ├── components/       # Reusable components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Page footer
│   │   ├── Layout.tsx    # Layout wrapper
│   │   └── BlogCard.tsx  # Blog post preview card
│   ├── data/
│   │   └── posts.json    # Sample blog post data
│   ├── pages/
│   │   ├── HomePage.tsx  # Home page with post list
│   │   ├── PostPage.tsx  # Individual post page
│   │   ├── AboutPage.tsx # About page
│   │   └── ContactPage.tsx # Contact page
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5173

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Notes

- This is a frontend-only application. In a real-world scenario, you would connect to a backend API for data.
- The contact form doesn't actually send emails - it's just a UI demonstration.
- Images are placeholders. In a real application, you would use actual images.
