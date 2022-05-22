FROM node:alpine

LABEL maintainer="Bumjoon Kim <nunojun@gmail.com>"

# Create nodejs user not to use root
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
USER nodejs

RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

ENV NODE_ENV=production

COPY --chown=nodejs:nodejs ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY --chown=nodejs:nodejs . .

EXPOSE 5000 

CMD ["node", "server"]
