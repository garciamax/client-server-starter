# Node Server + React client = ❤

## Overview/Motivation

1. No hassle(webpack, babel etc.) => create-react-app.
1. all in one repo but separate folders and scripts.
1. Develop with single command(both server and client): npm run dev
1. Deploy as you want(client build > s3, server > herouku whatever).

## how to use

1. `> npx degit git@github.com:garciamax/client-server-starter.git`
1. `> npm i && npm i --prefix client && npm i --prefix server`
1. `> npm run dev`

# Docker deploy

1. `> docker build . -t client-server-starter`
1. `> docker run --name client-server-starter -p 5000:5000 client-server-starter`
