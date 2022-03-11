FROM node
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8080
EXPOSE 80
CMD npm start
