@echo off
REM Script to run the development server

REM Set Node.js path
set NODE_PATH=C:\Program Files\nodejs

REM Add to PATH for this session
set PATH=%NODE_PATH%;%PATH%

REM Run npm dev
cd /d "%~dp0"
"%NODE_PATH%\npm.cmd" run dev

pause
