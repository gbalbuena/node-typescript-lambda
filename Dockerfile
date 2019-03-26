FROM node:8.10.0

RUN mkdir /app
WORKDIR /app
# Copy everything from build-context to /root
# NOTE: docker-compose will mount build-context instead
ADD . .

EXPOSE 3000

RUN npm install
CMD npm run serve