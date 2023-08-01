FROM node:16
#Create app directory
WORKDIR /app

#Install app dependencies

COPY package.json ./
RUN npm install

#Bundle app source
COPY . .

RUN ls -a
EXPOSE 3001
ENTRYPOINT ["npm", "start"]