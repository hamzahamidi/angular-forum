FROM node:14.18.1-buster-slim AS compile-image

LABEL name="Angular application" \
      description="This image is for an Angular application starter."

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . ./
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /app/dist /usr/share/nginx/html
