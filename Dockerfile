FROM node:8

ADD . /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN npm set progress=false

RUN npm install -g exp
RUN exp login --username ${EXPO_USERNAME} --password ${EXPO_PASSWORD}
RUN npm install
RUN npm install -g expo-cli
