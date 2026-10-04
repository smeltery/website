#!/bin/sh
# Runs a command inside the project's Flox environment, so git hooks behave the
# same from a plain shell, an editor, or an already-activated session.
set -eu
if [ -n "${FLOX_ENV:-}" ]; then
  exec "$@"
fi
exec flox activate -d "$(git rev-parse --show-toplevel)" -- "$@"
