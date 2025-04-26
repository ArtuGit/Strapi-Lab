FROM node:20-alpine

# Installing dependencies
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm vips-dev git

# Set working directory
WORKDIR /opt/app

# Copy package files and install dependencies
COPY package.json yarn.lock ./

RUN yarn global add node-gyp && \
    yarn config set network-timeout 600000 -g && \
    yarn install --frozen-lockfile

# Copy source code
COPY ../.. .

# Build the application
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN yarn build

# Reduce image size by removing unnecessary dependencies
RUN apk del build-base gcc autoconf automake nasm && \
    yarn cache clean

# Ensure the node user has ownership
RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["sh", "-c", "yarn strapi-types && yarn develop & yarn cs import --yes && wait"]