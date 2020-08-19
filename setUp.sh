#!/usr/bin/env bash

echo "Updating Linux..."
sudo apt-get update
sudo apt-get upgrade

echo "Installing requirements..."
sh installRequirements.sh
