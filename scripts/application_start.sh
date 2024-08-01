#!/bin/bash
set -e

# Navigate to app folder
cd /home/ec2-user/cavalieri-acebook

# Start the application with PM2
echo "Starting application with PM2"
pm2 start npm --name "cavalieri-acebook" -- start