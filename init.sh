sudo apt install yarn -y;
yarn install;
sudo apt install docker-composer docker.io;
yarn sequelize db:migrate;
yarn dev;
