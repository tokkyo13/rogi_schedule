FROM node:latest
ADD ./discordjs /app
WORKDIR /app
RUN apt -y update
RUN apt -y upgrade
RUN apt install -y ffmpeg
RUN npm init -y
RUN npm install