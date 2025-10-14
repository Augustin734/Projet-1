#!/bin/sh
# wait-for.sh

set -e

host="$1"
shift

# execute all remaining arguments as command
while ! nc -z "$host" 5432; do
  echo "Waiting for PostgreSQL at $host:5432..."
  sleep 1
done

exec "$@"
