FROM alpine:latest

ARG PB_VERSION=0.10.1

RUN apk add --no-cache \
    unzip

ADD https://github.com/pocketbase/pocketbase/releases/download/v0.20.7/pocketbase_0.20.7_linux_amd64.zip /tmp/pb.zip

RUN unzip /tmp/pb.zip -d /pb/

# uncomment to copy the local pb_migrations dir into the image
COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the image
# COPY ./pb_hooks /pb/pb_hooks

EXPOSE 8080

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]