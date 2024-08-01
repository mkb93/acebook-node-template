#!/bin/bash
# Navigate to app folder
cd /home/ec2-user/cavalieri-acebook

# Install dependencies
echo "Installing dependencies"
sudo -u ec2-user npm ci

# Build the application if necessary
echo "Building the application"
sudo -u ec2-user npm run build
