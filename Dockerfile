FROM node:16.15.1
WORKDIR '/app1'

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
