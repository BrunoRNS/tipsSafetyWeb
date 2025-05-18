#!/bin/bash

# Check if python3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 not found. Install with: sudo apt install python3"
    exit 1
fi

# Start HTTP server
echo "🔄 Starting Python HTTP server on port 8000..."

SCRIPT_PATH=$(realpath "$0")
SCRIPT_DIR=$(dirname "$SCRIPT_PATH")
PARENT_DIR=$(dirname "$SCRIPT_DIR")

python3 -m http.server 8000 $(PARENT_DIR)

echo ""

# If the server executed successfully show message
echo "🎉 All files loaded successfully"
