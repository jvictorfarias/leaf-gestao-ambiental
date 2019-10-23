#!/bin/bash

yarn sequelize db:create
yarn sequelize db:migrate
yarn dev
