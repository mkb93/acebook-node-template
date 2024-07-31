#!/bin/bash
# Update package manager and install Node.js
echo "Installing node.js"
sudo yum update -y
curl -sL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo yum install -y nodejs

# Install PM2 globally
echo "Installing PM2"
sudo npm install pm2@latest -g