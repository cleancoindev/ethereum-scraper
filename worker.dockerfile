FROM node:15.7.0-alpine

# -------------------
# Build app directory
# -------------------
WORKDIR /app

# Build dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY bin/ ./bin
COPY middlewares/ ./middlewares
COPY models/ ./models
COPY routes/ ./routes
COPY eventList.js ./
COPY index.js ./
COPY LICENSE.md ./
COPY scraper.js ./
COPY systemDefaults.js ./
COPY utils.js ./

# -------------
# Start Service
# -------------
CMD ["npm","run","scraper"]
