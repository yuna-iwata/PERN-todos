# PERN-todos

postgres, express, react and node todo app

running the docker container

in server dir:
create image
`docker build -t node-app-image .`
create container

```
docker run -p 5000:5000 -d --name node-app node-app-image
```

go to http://localhost:5000

other useful commands:
delete image
`docker image rm node-app-image`
delete container
`docker rm node-app -f`
