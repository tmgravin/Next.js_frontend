#!/bin/bash
cd /home/ec2-user/server

# Install project dependencies
npm install

# Install additional packages for React
npm install --save react react-dom react-scripts react-particles-js

# Install PM2 globally for process management
npm install -g pm2