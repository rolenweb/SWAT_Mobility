FROM node:12.2.0-alpine
WORKDIR /app
RUN npm install --silent
RUN npm install -g @vue/cli

# start app
CMD ["npm", "run", "serve"]