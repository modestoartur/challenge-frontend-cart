#!/bin/bash
echo $1
version=`echo $1 | sed -e "s/release-//g" -e "s/hotfix-//g"`
npm --no-git-tag-version version $version
