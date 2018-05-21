#Start with base image
FROM node:8.9-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

# Bundle app source
COPY . /app/

# expose the port to outside world
EXPOSE 3000
