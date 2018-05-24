# Sengram

This works like a bridge between Sentry and Telegram. Once configured Sengram will be capable to forward the errors from sentry to your telegram user.

[![Build Status](https://travis-ci.org/dygufa/sengram.svg?branch=master)](https://travis-ci.org/dygufa/sengram)


## How to use it:

### 1) Create a Telegram Bot

Search for the “botfather” telegram bot, type "/newbot", follow the instructions and at the end the @botfather will give you an API KEY.

### 2) Get your user id on Telegram

There are multiple ways to get your id (I guess), I simply asked @get_id_bot! 

### 3) Run Sengram on Docker

```
docker run -d --rm -p 80:3000 \
    --restart=always \
    --env TELEGRAM_BOT_TOKEN=API_KEY \
    --env TELEGRAM_CHAT_ID=YOU_TELEGRAM_ID \
    dygufa/sengram
```

### 4) Set up your Sentry account

Go to your notification section inside the project's settings page and put the address that points to your server into the webhook field (if you have used the command above sengram will be running on port 80 which means that you only need to paste the ip or domain on that field)


and that's it! :)