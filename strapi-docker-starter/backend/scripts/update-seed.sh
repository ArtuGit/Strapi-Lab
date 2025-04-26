#!/usr/bin/env bash
# Update /init/db/db-seed.sql with the current DB data
# to be invoked from the project root: bash backend/scripts/update-seed.sh

set -e
set -x

echo "Update DB seed."

docker exec -it postgres pg_dump -U strapi-starter -h localhost -d strapi-starter -f /home/db-seed.sql --no-owner
docker cp postgres:/home/db-seed.sql ./backend/init/

