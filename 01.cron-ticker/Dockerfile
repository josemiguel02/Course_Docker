# Load the base image
FROM node:16-alpine3.18

# CD app directory
WORKDIR /app

# Copy main file & package.json to app directory
COPY main.js package.json ./

# Install dependencies
RUN npm install

# Execute the command
CMD [ "npm", "start" ]
