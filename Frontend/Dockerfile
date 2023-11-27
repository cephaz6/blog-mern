# Use a Node.js base image
# FROM node:21.2.0-alpine


# RUN mkdir -p /srv/app/admin-client
# WORKDIR /srv/app/admin-client


# COPY package.json /srv/app/admin-client
# COPY package-lock.json /srv-app/admin-client
# COPY .env /srv-app/admin-client


# RUN npm install --silent
# RUN npm install react-scripts@3.3.1 -g --silent


# COPY . /srv/app/admin-client


# CMD [ "npm", "start" ]


FROM node:21.2.0-alpine


WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install

COPY . .

EXPOSE 3000


#6
CMD [ "npm", "start" ]