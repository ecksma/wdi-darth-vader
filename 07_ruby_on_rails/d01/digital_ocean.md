
## Deployment with Digital Ocean

## Introduction

*Digital Ocean* is a **Platform as a Service (PaaS)**. It is designed to do one thing and to do it well - create instances of web servers for you to use. Once you're out working on a job, you'll be exposed to a variety of PaaS providers - Amazon's EC2, Heroku, AppHarbor, and of course, Digital Ocean. Today you're going to sign up for Digital Ocean, create a droplet (their word for a server), and write an app and put it out for the world to see! Because as cool as it is to show your classmates what you've been working on, wouldn't it be cooler to show your friends and prospective employers? Plus, this will give you a leg up when looking for a job: being able to say **I can configure and setup a server** is kind of a big deal.

## 1. Registering for Digital Ocean
*Digital Ocean requires a credit card on file. General Assembly is providing free credits for our students so you should not need to worry about being billed; however, please be aware that if you run out of credits, your card will be billed.*

  1. Browse to https://www.digitalocean.com/
  2. Sign up for a new account on the main page by entering your email address and creating a password.
  3. You'll be sent a confirmation email (can take up to 5 minutes).
  4. Once you confirm your account, you'll need to enter in credit card information. Do so.
  5. Now, before doing anything else, select the *profile* icon and select *billing*.
  6. Enter in the unique code sent to you on Slack for your free credits!

## 2. Identify what Droplets are and how to create one

A **droplet** is a scalable server offered by Digital Ocean. Digital Ocean supports a variety of Linux platforms to develop on (amongst others). A droplet can serve a small website that you use for your own portfolio and it can scale up to host an enterprise application! One of the best things about a droplet is that it can scale - if your site blows up, you can expand the resources it has without needing to create a new server!

- Now, we need to locate something to make logging into our droplet easy and secure.

### WE DO - Locate an SSH Key

We need to create a secure way for you to log into any Droplet that you create. We're going to use an private key that you already are using on your computer. You should only share private keys with entities you trust! I only share mine with my computers and the servers I run. I even have a copy of mine in my will! They're private!

Because we want to make sure that you and only you - not some hacker in Russia, not some script kiddie in China - has access to your droplet, we'll use a private key that we're already comfortable with to connect to the server.

Open up terminal and enter in the following commands:

  1. `ls -al ~/.ssh` - list all of the keys in the ./ssh directory. You should see an `id_rsa.pub`. This is your public key.
  3. `atom ~/.ssh/id_rsa.pub` - Open the key in atom so we can use it in just a moment.

- Now that we have our SSH key, it is time to create a droplet!

###YOU DO - Create a Droplet

  1. Log in to Digital Ocean if you have not already done so.
  2. Select "Create Droplet" in the top-right corner.
  3. Give your droplet a name. It can be `my-site` or `myawesomesite.com`. The name is just used for reference.
  4. Select the $5/month size for your Droplet.
  5. Select a region.
  6. Ignore the available settings.
  7. Select the **Ubuntu 14.04 x64** operating system.
  8. Select **Add SSH Key**. You will copy/paste the SSH key that we retreived just moments ago into the text box.
  9. Select **Create Droplet**.
  10. Annnnndd we wait!

## 3. Work with a remote server (droplet) via command line

### Log in and setup a server in 10 steps!

  1. Log into the remote server (Droplet)
  2. `ssh root@0.0.0.0`
  3. I'm magically logged in because it used my private key from earlier to authenticate who I am!
  4. I need to update the system! `apt-get update`
  5. I need to install Ruby! `apt-get install ruby`
  6.
  6. Now that I have Ruby installed, I can now install gems! `gem install bundler`, `gem install pry`
  7. Awesome, I have everything I need to run an app! Time to make one!
  8. `touch Gemfile config.ru app.rb`
  9. `nano Gemfile`, ctrl-x to exit, S to save; repeat x3


## Basic Provisioning Cheat Sheet
- `ssh root@[your.ip.address.here]`
- `apt-get update` > y at prompt
- `apt-get install git`
- `apt-get install ruby`
- `gem install bundler`
- `gem install pry`
- `bundle`
- `rackup config.ru --port 80 --host 0.0.0.0`

#### JSON Gem Warning!
An error occurred while installing json (1.8.2), and Bundler cannot continue.
Make sure that `gem install json -v '1.8.2'` succeeds before bundling.
root@coffee-shop:~/coffee-shop.ninja# gem install json -v '1.8.2'`

`apt-get install build-essential` -- plox

`apt-get install ruby-dev`

#### Want to run your `rack` application and KEEP it running...
```
nohup bundle exec rackup -p 80 --host 0.0.0.0
```
##### What is nohup?
- `nohup`: Do not listen to the `hup` signal when terminal is closed
- `bundle exec`: Use the gem versions in the Gemfile.lock to execute the command
- `rackup -p 80`: Run the application on port 80
- `&`: Run this command in the background

- **Nano**
- Exit - ctrl-x
- Prompts you to save - select Y or N
- Prompts you to confirm where saving. Either edit or press return/enter.
