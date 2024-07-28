# Stage 1: Compile and build step:  angular codebase

# Use official node image as the base image
FROM node:14.20.1 AS build
# Set the working directory
WORKDIR /usr/local/app
# Add the source code to app
COPY ./ /usr/local/app/
# Install all the dependencies
RUN npm install
# Generate the build of the application
RUN npm run build

# Stage 2: Deploy step : Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:stable
COPY default.conf /etc/nginx/conf.d/default.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/portfolio /usr/share/nginx/html
# Expose port 80
EXPOSE 80


# commands:

# docker build --pull --rm -f "DockerFile" -t demo:latest "."  ------ sometimes error
# docker build --pull --rm -f "Dockerfile" -t demo:latest .
# docker run --name demo -d -p 80:80 demo     -- for run the img 
#          or
# docker-compose up --build



