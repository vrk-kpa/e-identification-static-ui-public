#!/bin/bash
set -e
PROJECTNAME=e-identification-static
PWD=$(pwd)

unamestr=$(uname)
SCRIPTFILE="undefined"

# check os, os x users install coreutils: brew install coreutils
if [ $unamestr == "Linux" ]; then
  SCRIPTFILE=$(readlink -f "$0")
elif [ $unamestr == "Darwin" ]; then
  SCRIPTFILE=$(greadlink -f "$0")
fi
SCRIPTPATH=$(dirname "$SCRIPTFILE")

cd ${SCRIPTPATH}/..
function usage
{
        echo "usage: $0 [OPTION] TARGET_ENV"
        echo
        echo "Builds a docker image"
        echo
        echo "  -p, --push                              Push to docker registry"
        echo
        echo "  -d, --no-deps                           Don't build dependency list"
        echo
        echo "  -k, --keep                              Keep node_modules from previous build, not for PROD!"
        echo
        echo "  -t, --tag <tag>                         Docker image tag"
}

while [ "$1" != "" ]; do
    case $1 in
        "local" ) TARGET_ENV=local
                                ;;
        "dev" ) TARGET_ENV=dev
                                ;;
        "kete" ) TARGET_ENV=kete
                                ;;
        "test" ) TARGET_ENV=test
                                ;;
        "prod" ) TARGET_ENV=prod
                                ;;
        -t | --tag )        	IMAGE_TAG="$2"
                                shift
                                ;;
        -p | --push )           push=1
                                ;;
        -d | --no-deps )        nodeps=1
                                ;;
        -k | --keep )           no_clean=1
                                ;;
        -h | --help )           usage
                                exit
                                ;;
        * )                     usage
                                echo $1
                                exit 1
    esac
    shift
done

NODE_VERSION=v4.6.2
NODE_RELEASE=node-${NODE_VERSION}-linux-x64
NODE_ARCHIVE=${NODE_RELEASE}.tar.xz

NODE_INSTALLED_VERSION=`node -v`
if [ "$no_clean" != "1" ]; then
    rm -rf node_modules
    npm ci && npm run-script dist
else
    npm run-script dist
fi

IMAGE_NAME=e-identification-docker-virtual.vrk-artifactory-01.eden.csc.fi/${PROJECTNAME}:${TARGET_ENV}

#build, tag and push docker image
docker build -f Dockerfile -t ${IMAGE_NAME} .

# Add labels to image, jenkins build tag, git commit, git branch, package list and jar list currently
DPKG_RESULT=$(docker run --rm --entrypoint="/usr/bin/dpkg-query" ${IMAGE_NAME} -W|sed -e 's/$/|/' -e 's/$/\\/')
printf "FROM ${IMAGE_NAME}\nLABEL build-tag=${BUILD_TAG}\nLABEL git-commit=${GIT_COMMIT}\nLABEL git-branch=${GIT_BRANCH}\nLABEL dpkg-list=\"${DPKG_RESULT}\"\n"|docker build -t ${IMAGE_NAME} -

if [ "$push" = "1" ]; then
        docker push ${IMAGE_NAME}
fi

if [ ! -z ${IMAGE_TAG+x} ]; then
        docker tag ${IMAGE_NAME} ${IMAGE_NAME}_${IMAGE_TAG}
        if [ "$push" = "1" ]; then
                docker push ${IMAGE_NAME}_${IMAGE_TAG}
                docker rmi ${IMAGE_NAME}_${IMAGE_TAG}
        fi
fi
if [ "$push" = "1" ]; then
        docker rmi ${IMAGE_NAME}
fi

cd ${PWD}

