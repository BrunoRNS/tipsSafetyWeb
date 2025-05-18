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

python3 -m http.server 8000 $(PARENT_DIR) &> /dev/null &
SERVER_PID=$!
cd - &> /dev/null

# Ensure server is killed on exit
trap 'kill $SERVER_PID 2> /dev/null && echo "✅ Server stopped"' EXIT

# Wait for server to start
sleep 2

# Function to test URLs
test_url() {
    local file=$1
    local response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:8000/$file")
    
    if [ "$response" -eq 200 ]; then
        echo "✅ $file - OK (200)"
    else
        echo "❌ $file - Failed ($response)"
        return 1
    fi
}

# Test essential files
echo ""
echo "🔍 Testing files:"
errors=0
test_url "index.html" || errors=$((errors+1))
test_url "script.js" || errors=$((errors+1))
test_url "style.css" || errors=$((errors+1))

# Final result
echo ""
if [ $errors -eq 0 ]; then
    echo "🎉 All files loaded successfully!"
    exit 0
else
    echo "💥 Found issues with $errors file(s)"
    exit 1
fi