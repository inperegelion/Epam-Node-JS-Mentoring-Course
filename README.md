# Epam-Node-JS-Mentoring-Course

You are viewing my repo for hometasks for this course.

## Hometask 1

Steps to evaluate listed below.

```sh
yarn
yarn reversinatorizator
# then spell:
янукович
# then evaluate estimate 2
```

```sh
# view csv file
cat ./assets/books.csv
yarn csvConverter
# view generated file
cat output/books.txt
# then evaluate estimate 3
# read code and estimate 4
```

```sh
# read code more and estimate 5
# do not approve hometask unless you've made a thorough code review.
```

## Hometask 2

After you've pulled the branch `HT2`, find the next file: `insomnia/Insomnia React Mentoring Program.json`. You need to open it with the Insomnia app. Official page is here: https://insomnia.rest/download.

Then run the server with command below and examine requirements.

```sh
yarn
yarn serve
```

## Hometask 3

### How have I ran Postgre locally

If you are using Windows + WSL, go to [this article on Microsoft official docs](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql) telling how to use Postgre in WSL. When you will get into the `psql` CLI, use this SQL command to create DataBase:

```sh
CREATE DATABASE mydb
```

Now you should know everything to fill up `.env` file.

> **Note!** I've added `.env.example` file with a couple default values.
