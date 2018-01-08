# smoke base
Basis for a nightwatch smoke test suite

## Download Docker

* [Docker For Mac](https://docs.docker.com/docker-for-mac/) not docker toolbox
* [Windows](https://docs.docker.com/docker-for-windows)


#### optionally open vnc session
chrome `open vnc://:secret@127.0.0.1:5901`

## run the tests
`docker-compose run --rm nightwatch`

## run the tests
`docker-compose run --rm nightwatch`

## run a specific test
`docker-compose run --rm nightwatch tests/login.js`

## restart chromedriver
`docker-compose down`

## restart chrome enviroment
`docker-compose down && docker-compose up chromedriver && open vnc://:secret@127.0.0.1:5901`
