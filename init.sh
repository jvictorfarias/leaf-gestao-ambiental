sudo apt install yarn -y;
yarn install;
sudo apt install docker-composer docker.io -y;
docker-compose up;
yarn sequelize db:create && yarn sequelize db:migrate;
yarn dev;
