FROM node:14

RUN mkdir -p /src
WORKDIR /src

# copy the app, note .dockerignore
COPY . /src/
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
# RUN yarn build

# expose 5000 on container
EXPOSE 12000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=12000

# start the app
CMD ["/bin/bash","-c","yarn build && yarn start --port 12000" ]
