# Use an official Node.js LTS (Long Term Support) image as a base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port your app runs on 
EXPOSE 5173

# Run your app in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
