#!/bin/sh

nvm use default

cd iro-micro-frontend
npm run start &

cd ../micro-frontend-demo/
ng serve &

cd ../micro-frontend-demo2/
ng serve &

cd ../micro-frontend-react/
npm start
