FROM node:18
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Set environment variable for the port
ENV PORT 8080

# Expose the port
EXPOSE 8080

# Start the bot
CMD ["npm", "start"]