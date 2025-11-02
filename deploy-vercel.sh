#!/bin/bash

# Vercel Deployment Script for open-lovable
# This script helps deploy the application to Vercel with proper configuration

echo "🚀 Starting Vercel deployment for open-lovable..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Verify API keys
if [ -z "$FIRECRAWL_API_KEY" ]; then
    echo "⚠️  FIRECRAWL_API_KEY not found in environment"
    echo "Please set it in Vercel dashboard or run:"
    echo "export FIRECRAWL_API_KEY=fc-5cb895a3c09b4b91837eb3366817ee3d"
fi

if [ -z "$OPENROUTER_API_KEY" ]; then
    echo "⚠️  OPENROUTER_API_KEY not found in environment"
    echo "Please set it in Vercel dashboard or run:"
    echo "export OPENROUTER_API_KEY=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"
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
echo "2. Set OPENROUTER_API_KEY=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 in Vercel dashboard"
echo "3. Configure custom domain if needed"
echo "4. Test API endpoints at your-domain.vercel.app/api/scrape-website"
echo "5. Test AI functionality with 'Sonet 4.5' model"
echo "6. Monitor deployment logs and performance"