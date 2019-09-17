#!/usr/bin/env bash

source ~/.nvm/nvm.sh

nvm use default

cd iro-micro-frontend
npm run start &

cd ../micro-frontend-demo/
ng serve &

cd ../micro-frontend-demo2/
ng serve &

cd ../micro-frontend-react/
npm start

cd ../micro-frontend-vue/
npm run serve
