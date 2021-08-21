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
COPY api.js ./
COPY eventList.js ./
COPY index.js ./
COPY LICENSE.md ./
COPY scraper.js ./
COPY utils.js ./

# ---------
# Start API
# ---------
EXPOSE 8080

CMD ["./bin/start-api.sh"]
