# Start with base image
FROM node:10.1

# Create working directory
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json /app/
RUN npm install

# Bundle source
COPY . /app/

EXPOSE 3000