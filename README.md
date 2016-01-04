## Requirements
  Ruby 2.0 / http://www.ruby-lang.org / RVM / https://rvm.io

    curl -L https://get.rvm.io | bash -s stable

  NodeJS / http://nodejs.org / NPM / https://npmjs.org

    brew install nodejs
    sudo apt-get install nodejs

    curl https://npmjs.org/install.sh | sh

    npm install -g bower

  PostgeSQL / www.postgresql.org

    brew install postgresql
    sudo apt-get install postgresql libpq-dev

  ImageMagick / www.imagemagick.org

    brew install imagemagick
    sudo apt-get install imagemagick libmagickwand-dev

## QuickStart

  clone repo

    git clone git@github.com:maximderbin/manchikha.git

  go to the project directory

    cd manchikha

  install gems

    bundle

  copy configs (..and edit them)

    cp config/database.yml.sample config/database.yml

  set up database

    rake db:setup

  run webserver

    rails s

  open your browser and visit root page

    http://0.0.0.0:3000
