#!/bin/bash

iptables -F

if [ -e /tmp/vagrant-provisioned ]
then
  echo Already provisioned
else

  touch /tmp/vagrant-provisioned

  yum -y groupinstall 'Development Tools'

  # Install screen
  yum -y install screen
  cp /opt/provision/.screenrc /home/vagrant/.screenrc
  cp /opt/provision/.screenrc /root/.screenrc

  # Install Git
  GIT_VER="1.7.4"
  yum -y install gettext-devel expat-devel curl-devel zlib-devel openssl-devel
  cd /usr/local/src
  wget http://kernel.org/pub/software/scm/git/git-$GIT_VER.tar.bz2
  tar jxf git-$GIT_VER.tar.bz2
  cd git-$GIT_VER
  make prefix=/usr/local all
  make prefix=/usr/local install

  # Install node
  cd /usr/local/src/
  git clone https://github.com/joyent/node.git
  cd node/
  ./configure
  make
  make install

  # Install npm
  curl http://npmjs.org/install.sh | sh

fi
