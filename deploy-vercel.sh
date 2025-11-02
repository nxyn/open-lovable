#!/bin/bash

# Vercel Deployment Script for open-lovable
# This script helps deploy the application to Vercel with proper configuration

echo "🚀 Starting Vercel deployment for open-lovable..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Verify Firecrawl API key
if [ -z "$FIRECRAWL_API_KEY" ]; then
    echo "⚠️  FIRECRAWL_API_KEY not found in environment"
    echo "Please set it in Vercel dashboard or run:"
    echo "export FIRECRAWL_API_KEY=fc-5cb895a3c09b4b91837eb3366817ee3d"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build to verify everything works
echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo ""
echo "📋 Post-deployment checklist:"
echo "1. Set FIRECRAWL_API_KEY=fc-5cb895a3c09b4b91837eb3366817ee3d in Vercel dashboard"
echo "2. Configure custom domain if needed"
echo "3. Test API endpoints at your-domain.vercel.app/api/scrape-website"
echo "4. Monitor deployment logs and performance"