#!/usr/bin/env bash

yarn doc &&
cd doc &&
git init &&
git remote add origin git@github.com:allenwyj/sui-doc.git &&
git add . &&
git commit -m "doc" &&
git branch -M main &&
git push -u origin main -f
cd ..