FROM node:18.16.1-slim
WORKDIR /app
RUN apt-get update \
      && apt-get install -yq git curl gnupg wget build-essential make \
      && apt-get clean \
      && rm -rf /var/lib/apt/lists/*
RUN npm i -g pnpm && pnpm install nuxi
CMD ["make", "build"]