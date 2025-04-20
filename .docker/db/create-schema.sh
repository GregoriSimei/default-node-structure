#!/bin/bash
set -e

# Define schema default se não existir
SCHEMA="${POSTGRES_SCHEMA:-tech-challenge-order-service}"

echo "Creating schema '$SCHEMA'..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE SCHEMA IF NOT EXISTS "$SCHEMA";
EOSQL

echo "Schema '$SCHEMA' created successfully."