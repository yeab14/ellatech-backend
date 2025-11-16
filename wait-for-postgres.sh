#!/bin/sh
# wait-for-postgres.sh

set -e

host="$1"

until pg_isready -h "$host" -p 5432 -U "$DATABASE_USER"; do
  echo "Waiting for Postgres at $host:5432..."
  sleep 2
done

echo "Postgres is ready"
