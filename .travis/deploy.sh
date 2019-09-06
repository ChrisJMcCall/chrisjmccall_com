#!/bin/bash

eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 .travis/id_rsa_chrisjmccall # Allow read access to the private key
ssh-add .travis/id_rsa_chrisjmccall # Add the private key to SSH

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/build/ $sshuser@$targethost:$targetpath