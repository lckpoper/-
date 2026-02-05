#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if command -v python >/dev/null 2>&1; then
  python -m http.server 8000
elif command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 8000
else
  echo "Python not found. Install Python 3 to run a local server." >&2
  exit 1
fi
