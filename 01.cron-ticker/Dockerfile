# Load the base image
FROM node:16-alpine3.18

# CD app directory
WORKDIR /app

# Copy src folder & package.json to app directory
COPY main.js package.json ./

# Install dependencies
RUN npm install

# Execute the command
CMD [ "npm", "start" ]
