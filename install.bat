@echo off
REM Script to install Node.js and setup the project

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js is already installed
    node --version
) else (
    echo Node.js is not installed
    echo Please download and install Node.js from https://nodejs.org/
    echo Then run npm install in this directory
    exit /b 1
)

REM Install npm dependencies
echo.
echo Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo.
    echo Installation complete!
    echo To start the development server, run: npm run dev
) else (
    echo.
    echo Installation failed. Please check the errors above.
    exit /b 1
)

pause
