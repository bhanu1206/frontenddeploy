# Stage 1: Build the React application
FROM node:16-alpine AS build 
# Set working directory
WORKDIR /app
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code
COPY . .
 
# Build the React app for production
RUN npm run build
 
# Stage 2: Serve the React application using Nginx
FROM nginx:alpine
 
# Copy built files from the previous stage to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html
 
# Expose port 80 to the outside world
EXPOSE 80
# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
