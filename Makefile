up: docker-up
down: docker-down


docker-up:
	docker-compose up -d

docker-down:
	docker-compose down --remove-orphans

docker-down-clear:
	docker-compose down -v --remove-orphans

docker-pull:
	docker-compose pull

docker-build:
	docker-compose build

docker-logs:
	docker-compose logs

docker-logs-follow:
	docker-compose logs -f

client-install:
	docker-compose run client-node npm install

client-build:
	docker-compose run client-node npm run build

