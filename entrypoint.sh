#!/bin/bash
set -e

replace_env_vars() {

  local DESAFIO_FRONT="/usr/share/nginx/html"
  local log="/tmp/replace_vars.log"

  if mkdir -p "${DESAFIO_FRONT}" && touch "${log}" >/dev/null 2>&1; then
    echo "ENV VARS" >>"${log}"
    env >>"${log}"
    for f in "${DESAFIO_FRONT}/"*.js; do
      echo "FILE" >>"${log}"
      echo "${f}" >>"${log}"
      sed -i "s|{{DESAFIO_FRONT_API_URL}}|$DESAFIO_FRONT_API_URL|;s|{{DESAFIO_FRONT_CLIENT_APP}}|$DESAFIO_FRONT_CLIENT_APP|;s|{{WEB_ADDRESS}}|$WEB_ADDRESS|;s|{{MICROSOFT_APP_ID}}|$MICROSOFT_APP_ID|;" "$f" >>"${log}"
      envsubst '${DESAFIO_FRONT_API_URL},${DESAFIO_FRONT_CLIENT_APP},${WEB_ADDRESS},${MICROSOFT_APP_ID}' <"$f" >"${f%.js}.bak"
      mv "${f%.js}.bak" "$f"
    done
    echo >>"${log}"
  else
    echo "Can not write to ${log}."
  fi
}

replace_env_vars

# allow arguments to be passed to nginx
if [[ ${1:0:1} = '-' ]]; then
  EXTRA_ARGS="$@"
  set --
elif [[ ${1} == nginx || ${1} == $(which nginx) ]]; then
  EXTRA_ARGS="${@:2}"
  set --
fi

# default behaviour is to launch nginx
if [[ -z ${1} ]]; then
  echo "Starting nginx..."
  nginx -g "daemon off;" ${EXTRA_ARGS}
else
  exec "$@"
fi
