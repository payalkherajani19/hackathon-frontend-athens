FROM node:14.16.1 as base
WORKDIR /react-app/
COPY . .
ENV REACT_APP_API_URL http://34.41.250.117:5000
RUN npm install
RUN npm run build
RUN rm -rf node_modules

FROM nginx 
COPY --from=base /react-app/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/