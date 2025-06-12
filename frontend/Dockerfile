FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Fix invalid Host header
ENV HOST=0.0.0.0
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0"]