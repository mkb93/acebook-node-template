#!/bin/bash
set -e

# Stop the application
pm2 stop all || true
pm2 delete all || true

echo "Application stopped"