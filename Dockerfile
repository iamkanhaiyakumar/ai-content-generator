FROM node:22-alpine AS base

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

FROM node:22-alpine AS final

WORKDIR /src

COPY --from=base /src ./

CMD ["npm", "run", "dev"]
