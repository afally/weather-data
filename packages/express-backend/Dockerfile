FROM node:16
#Create app directory
WORKDIR /app

#Install app dependencies
#A wildcard is used to ensure both package.json and package-lock.json are copied 
#where available (npm@5+)

COPY package.json ./
RUN npm install

#Bundle app source
COPY . .

COPY .env .env

# Expose the port specified in .env (3001 in this case)
EXPOSE 3000
ENTRYPOINT ["npm", "start"]