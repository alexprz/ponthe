# Ponthe App

This application is designed to work on iOS and Android. It is powered by ReactNative.

## Installation
You can install this software locally or using Docker. For both installation, you need to create an Expo account on https://expo.io/signup .

### Using docker
This installation requires Docker. Note: this installation does not provide the iOS or Android Simulator.

Edit the `.env.dist` file using your username and password and rename it `.env` .

Run

```
docker-compose build
```

And use `docker-compose kill` to kill the server.

### Local installation
This installation requires NodeJS and npm.

Run

```
[sudo] npm install
```

## Usage

### Docker

Run

```
docker-compose up
```
Browse http://localhost:1900* (the right url is written is your terminal).
Install Expo on your smartphone and scan the QR Code.


### Local

Run

```
[sudo] npm start
```
