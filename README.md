## Requirements
  Ruby 2.3.0 / http://www.ruby-lang.org / RVM / https://rvm.io

    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    curl -sSL https://get.rvm.io | bash -s stable

  NodeJS 4.2.4 / http://nodejs.org / NPM / https://npmjs.org

    curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
    sudo apt-get install nodejs

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

  install npm packages

    cd ui && npm install && cd ..

  copy configs (..and edit them)

    cp config/database.yml.sample config/database.yml

  set up database

    rake db:setup

  run webserver

    rails s

  run webpack

    cd ui && npm start

  open your browser and visit root page

    http://0.0.0.0:9000
