FROM node:10.14.2
COPY . /app
WORKDIR /app
RUN npm install
CMD npm run prod
EXPOSE 7003