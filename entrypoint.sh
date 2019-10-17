#!/bin/bash

sleep 20

yarn sequelize db:create
yarn sequelize db:migrate
