# KiteCoach - Premium Kiteboarding Coaching Website

A beautiful single-page website showcasing premium kiteboarding coaching services in El Gouna, Egypt and Lefkada, Greece. Built with React, Tailwind CSS, and Shadcn UI components.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive Google Maps integration for coaching locations
- Beautiful hero section with eye-catching kiteboarding imagery
- About section highlighting coach experience and qualifications
- Courses section showcasing various lesson offerings
- Testimonials from satisfied clients
- Gallery of kiteboarding action photos
- Location information for El Gouna and Lefkada
- Contact form for booking inquiries

## Technologies Used

- React (Vite)
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Google Maps API
- React Hook Form for form handling
- React Query for data fetching
- Wouter for routing

## Deploying to GitHub Pages

This project is configured for easy deployment to GitHub Pages using GitHub Actions. Follow these steps to deploy your site:

1. Create a new repository on GitHub
2. Push your code to the new repository
3. Go to your repository's Settings tab
4. Scroll down to the GitHub Pages section
5. Under "Source", select "GitHub Actions"
6. The GitHub workflow will automatically build and deploy your site
7. Your site will be available at `https://[your-username].github.io/[repository-name]/`

## Important Notes for GitHub Pages

The project includes special configurations for GitHub Pages deployment:

- A GitHub workflow file in `.github/workflows/deploy.yml` that handles the build and deployment
- A custom 404.html page that enables client-side routing on GitHub Pages
- Special routing scripts in index.html that handle GitHub Pages redirects

## Google Maps API

To make the maps work properly, you'll need to add your own Google Maps API key:

1. Get a Google Maps JavaScript API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. In the GitHub repository, go to Settings > Secrets and variables > Actions
3. Create a new repository secret named `GOOGLE_MAPS_API_KEY` with your API key
4. Update the GitHub workflow file to include this key in the build process

## Custom Domain (Optional)

To use a custom domain with your GitHub Pages site:

1. Go to your repository's Settings tab
2. In the GitHub Pages section, enter your custom domain
3. Update your DNS settings according to GitHub's instructions
4. Check "Enforce HTTPS" for secure connections

## Local Development

To run the project locally:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open your browser to the URL shown in the terminal

## License

This project is available for personal and commercial use.

## Credits

- Kiteboarding images from Unsplash and Pexels
- Icons from Lucide React
- UI components from Shadcn UI