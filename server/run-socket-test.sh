#!/bin/bash

# Function to print colorized messages
colorize_message() {
  local color="$1"
  local message="$2"
  case $color in
    "blue")
      echo -e "\033[34m$message\033[0m"
      ;;
    "green")
      echo -e "\033[32m$message\033[0m"
      ;;
    "red")
      echo -e "\033[31m$message\033[0m"
      ;;
    *)
      echo -e "$message"  # Default to no color
      ;;
  esac
}

# Use the function to display messages
colorize_message "blue" "Running the socket test script..."

# Run the socket test script and capture the exit status
if ! npx tsx src/socket-test.ts; then
  # If the command fails, print the failure message in red
  colorize_message "red" "Command failed: socket-test.ts script did not execute successfully."
else
  # If the command succeeds, print the success message in green
  colorize_message "green" "Socket test script ran successfully!"
fi
