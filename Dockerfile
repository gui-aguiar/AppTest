FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG VITE_APP_API_URL
ENV VITE_APP_API_URL=$VITE_APP_API_URL

RUN npm run build

FROM httpd:2.4-alpine

ENV PORT=80

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
EXPOSE ${PORT}

CMD ["httpd-foreground"]
