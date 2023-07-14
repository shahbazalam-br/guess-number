# Use a lightweight Node.js base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app is listening on
EXPOSE 3000

# Specify the command to run your app
CMD [ "npm", "start" ]
