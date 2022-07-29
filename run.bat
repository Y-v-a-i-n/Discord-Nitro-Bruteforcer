@echo off
IF EXIST "node_modules" (
    cls & node index.js
) ELSE (
    npm install & cls & node index.js
)
pause