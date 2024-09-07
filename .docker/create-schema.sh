#!/bin/bash

if [ -z "$POSTGRES_SCHEMA" ]; then
  echo "The environment variable POSTGRES_SCHEMA is not defined. It will use 'verx-crud'."
  POSTGRES_SCHEMA="verx-crud"
fi

touch /docker-entrypoint-initdb.d/init.sql

# repleace init sql with postgres command
echo "CREATE SCHEMA IF NOT EXISTS \"$POSTGRES_SCHEMA\";" > /docker-entrypoint-initdb.d/init.sql

# Execute SQL
psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /docker-entrypoint-initdb.d/init.sql

rm /docker-entrypoint-initdb.d/init.sql