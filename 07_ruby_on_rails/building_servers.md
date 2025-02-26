## Building Servers

**Using Digital Ocean as our PaaS**


By the end of this lesson, you will have a server configured with the following:
  - Ruby & Ruby-dev
  - Nginx
  - Unicorn
  - Postgres (creates a root user and database)

It will also have the following gems pre-installed:
  - pg
  - json

Finally, it creates a default `/var/www/app` directory for you to start with.

##Important!

  1. Remove the default configuration for nginx: `rm -v /etc/nginx/sites-available/default`
  1. You will need to create an nginx config file in `/etc/nginx/conf.d/default.conf`
  2. You will need to edit your Unicorn configuration file in `/var/www/app/unicorn.rb`
  3. Sample configuration files are included in this repository.

##Running this script

  1. Log into your droplet.
  2. Open a a new file in a text editor and copy the contents of [Install.sh](https://github.com/code-for-coffee/nginx-unicorn-config/blob/master/provisioning_script/install.sh) into it. Example: `nano setup.sh`
  3. Update this file's permissions - `chmod u+x setup.sh`
  4. Run the script! `./setup.sh`
  5. That's it. Enjoy!

This script has been tested on Ubuntu 14.04.

## Starting using Rack (Difficulty: Easy)

  1. Stop the Nginx service - `service nginx stop`
  2. `bundle install` to install your required gems.
  3. Run `bundle exec rackup -p 80 --host 0.0.0.0` to run your application.
  4. To leave the server running after you logout, instead run `nohup bundle exec rackup -p 80 --host 0.0.0.0`

## Starting using Unicorn + Nginx (Difficulty: Moderate)

  1. Finally, you need to startup unicorn.
  2. Then run `bundle install` to install your gems.
  3. To do so, browse to your app directory. Then, run Unicorn:

- `unicorn -c unicorn.rb -D`

Now you need to restart nginx.

`service nginx restart`

And that's it! Your server should be browsable by IP/domain on port 80 unless you modified the config scripts.

## Nginx Quick Guide

- `service nginx start` (starts the nginx server)
- `service nginx stop` (stops the nginx server)
- `service nginx restart` (restarts the nginx server)

## Updated your app?

Have you made changes to your app but don't see them?

- `bundle` from your app directory.
- Then, run: `unicorn -c unicorn.rb -D`
- Finally, restart Nginx: `service nginx restart`
