#!/bin/bash
if [ -d "node_modules/" ];then
    clear & node index.js
else
    npm install
    clear & node index.js
fi