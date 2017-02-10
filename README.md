# XeThon

super tex IDE

## Setup
If nodejs isn't installed in your os, you need to install nodejs. Though there are several ways to install nodejs, I show you one way.

First, install homebrew if you don't have.
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew -v
homebrew x.x.x
```

Then, with homebrew, install nodebrew which is in use to manage nodejs.
```
$ brew install nodebrew

$ nodebrew setup

$ nodebrew help
```

And install nodejs.
```
$ nodebrew install-binary v7.5.0

$ nodebrew use v7.5.0

$ vim ~/.bash_profile

# add this code in .bash_profile.
export PATH=$HOME/.nodebrew/current/bin:$PATH

# then push two keys to save and close .bash_profile.
:wq

$ source ~/.bash_profile

$ node -v
v7.5.0
```

Finally, you can setup our develop environment.
```
$ git clone https://github.com/RealTwo-Space/XeThon.git

$ cd XeThon

$ npm install
```

Now, you have just installed requirements to develop this project. So let's develop!

If you want to start up this app, run this command.
```
$ npm start
```

And, if you want to build this app, try this command.
```
$ npm run build
```
