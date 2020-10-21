#!/bin/bash
set -e

# Hugo version
HUGO_VERSION=0.74.1

# Default suffix - we are all mac users
SUFFIX=macOS-64bit.tar.gz

# Override the suffix if set
[ -n "${HUGO_DOWNLOAD_SUFFIX}" ] && SUFFIX=${HUGO_DOWNLOAD_SUFFIX}

HUGO_DOWNLOAD=hugo_extended_${HUGO_VERSION}_${SUFFIX}
if [ "${HUGO_DISABLE_EXTENDED_VERSION}" = true ] ; then
    HUGO_DOWNLOAD=hugo_${HUGO_VERSION}_${SUFFIX}
    echo "${HUGO_DOWNLOAD}"
fi

ROOT_PATH=`dirname "${0}"`
HUGO_DOWNLOAD_DIRECTORY=${ROOT_PATH}/.hugo

# Install Hugo if not already cached or upgrade an old version.
if [ ! -f "${HUGO_DOWNLOAD_DIRECTORY}/${HUGO_DOWNLOAD}" ]; then
  echo "Downloading ${HUGO_DOWNLOAD}"
  rm -rf $HUGO_DOWNLOAD_DIRECTORY
  mkdir -p $HUGO_DOWNLOAD_DIRECTORY
  cd $HUGO_DOWNLOAD_DIRECTORY
  curl -OL https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_DOWNLOAD} --output "${HUGO_DOWNLOAD}"
  tar xvzf ${HUGO_DOWNLOAD} hugo
  cd -
fi

$ROOT_PATH/.hugo/hugo "$@"
