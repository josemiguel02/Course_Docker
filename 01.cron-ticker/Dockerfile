# Load the base image
FROM node:16-alpine3.18

# CD app directory
WORKDIR /app

# Copy main file & package.json to app directory
# COPY main.js package.json ./
# COPY . .
COPY package.json ./

# Install dependencies
RUN npm install

# Copy main file
COPY main.js ./

# Execute the command when initializing the image in container
CMD [ "npm", "start" ]
