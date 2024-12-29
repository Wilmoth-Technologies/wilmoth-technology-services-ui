## Deployment

To publish the latest changes to the GitHub Pages site:

1. Ensure all changes are committed and pushed to the main branch
2. Run the following commands:
   ```bash
   npm run predeploy
   npm run deploy
   ```
3. The site will be built and deployed to the `gh-pages` branch
4. Wait a few minutes for GitHub Pages to update with the latest changes
5. Visit your GitHub Pages URL to verify the deployment

Note: The deployment script uses `gh-pages` package to handle publishing to GitHub Pages. Make sure you have the necessary permissions to push to the repository.
