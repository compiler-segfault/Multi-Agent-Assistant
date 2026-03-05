@echo off
cls

echo Smart Agent Cluster Assistant
echo -------------------------------
echo.
echo Step 1: Checking Node.js...
node -v
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo.

echo Step 2: Installing dependencies...
if not exist "node_modules" (
    npm install --registry=https://registry.npmmirror.com
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
)
echo Step 3: Starting development server...
echo Local access: http://localhost:5173/
echo Network access: http://your-ip:5173/ (check console for actual IP)
echo.
npm run dev:host

pause