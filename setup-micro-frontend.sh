#!/usr/bin/env bash

source ~/.nvm/nvm.sh

nvm use default

cd luigi-micro-frontend
npm install

cd ../micro-frontend-demo/
ng install

cd ../micro-frontend-demo2/
npm install

cd ../micro-frontend-react/
npm install

cd ../micro-frontend-vue/
npm install
