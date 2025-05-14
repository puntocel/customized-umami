#!/usr/bin/env bash
set -e

# Replace placeholders in env.template.js with real runtime values
sed \
  -e "s|__INVESTOR_ID__|${INVESTOR_ID:-}|g" \
  -e "s|__ADMIN_TOKEN__|${ADMIN_TOKEN:-}|g" \
  /app/public/env.template.js > /app/public/env.js

# Finally, exec the main command (yarn start-docker)
exec "$@"
