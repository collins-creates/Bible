@echo off
echo 🚀 Starting Bible Website Deployment...

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Check if we're in a Git repository
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
    git remote add origin https://github.com/collins-creates/Bible.git
)

REM Add all files
echo 📦 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Complete Bible website with all 66 books and 31,102 verses - %date% %time%"

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push -u origin main

echo ✅ Deployment completed!
echo.
echo 🌐 Your Bible website will be available at:
echo    https://collins-creates.github.io/Bible/
echo.
echo 📋 Next steps:
echo    1. Go to https://github.com/collins-creates/Bible
echo    2. Click Settings → Pages
echo    3. Select 'Deploy from a branch'
echo    4. Choose 'main' branch and '/ (root)' folder
echo    5. Click Save
echo.
echo ⏳ Wait 5-10 minutes for GitHub Pages to deploy your site.
pause 