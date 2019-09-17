#!/usr/bin/env bash

source ~/.nvm/nvm.sh

nvm use default

rm -rf builds
mkdir builds

cd iro-micro-frontend
npm run buildConfig
tar -cvzf ../builds/iro-micro-frontend.tar.gz public


cd ../micro-frontend-demo/
rm -rf dist
npm run build
tar -cvzf ../builds/micro-frontend-demo.tar.gz dist/micro-frontend-demo/

cd ../micro-frontend-demo2/
rm -rf dist
npm run build
tar -cvzf ../builds/micro-frontend-demo2.tar.gz dist/micro-frontend-demo2/

cd ../micro-frontend-react/
rm -rf build
PUBLIC_URL=http://api.iauro.com/neel/micro-frontend/react/ npm run build
tar -cvzf ../builds/micro-frontend-react.tar.gz build/

scp -r -i ~/Downloads/iauro_demo.pem ./builds ubuntu@13.233.255.84:/var/www/html/micro-frontend/

