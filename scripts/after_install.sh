#!/bin/bash
set -e
# Navigate to app folder
cd /home/ec2-user/cavalieri-acebook

# Install dependencies
echo "Installing dependencies"
npm ci

# Build the application if necessary
echo "Building the application"
npm run build  || echo "Build script not found. Skipping build."