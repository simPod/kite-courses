# Exporting to GitHub and Setting Up GitHub Pages

## 1. Exporting your project to GitHub

1. Create a new repository on GitHub
2. In your Replit project, click on the "Version Control" icon in the sidebar (Git icon)
3. Click "Connect to GitHub"
4. Follow the prompts to authorize Replit to access your GitHub account
5. Select the repository you created and click "Connect"
6. Add a commit message and click "Commit & push"

## 2. Setting up GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the source, select "GitHub Actions"
5. GitHub will automatically recognize the workflow file we've created

## 3. Running the GitHub Pages workflow

1. Go to the "Actions" tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow
3. If it hasn't run automatically, click on "Run workflow"
4. Once the workflow completes successfully, your site will be available at `https://[your-username].github.io/[repository-name]/`

## 4. Important notes for GitHub Pages deployment

- Your site base path will be `/[repository-name]/` unless you use a custom domain
- Assets (images, CSS, JS) need to be loaded with relative paths
- If you encounter issues with paths, consider adding these settings to your project:
  - Update your router to use the repository name as the base path
  - Ensure all internal links use relative paths

## 5. Using a custom domain (optional)

1. In your GitHub repository, go to "Settings" > "Pages"
2. Under "Custom domain", enter your domain name
3. Follow the instructions to set up DNS records for your domain
4. Check "Enforce HTTPS" for secure connections