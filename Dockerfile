FROM node:latest
ADD ./discordjs /discordjs
ADD ./scripts /scripts
RUN apt -y update
RUN apt -y upgrade
RUN apt install -y ffmpeg
WORKDIR /discordjs
RUN npm install
