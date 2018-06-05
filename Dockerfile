FROM zulhfreelancer/node-ffmpeg
WORKDIR /app
COPY . ./
RUN yarn