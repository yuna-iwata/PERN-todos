# PERN-todos

postgres, express, react and node todo app

running the docker container

in server dir:
create image
`docker build -t node-app-image .`
create container

```
docker run -v $(pwd):/app -p 5000:5000 -d --name node-app node-app-image
```

(the $(pwd) gives the current path to the Dockerfile - only works for mac windows uses a different syntax)

go to http://localhost:5000

other useful commands:
delete image
`docker image rm node-app-image`
delete container
`docker rm node-app -f`
