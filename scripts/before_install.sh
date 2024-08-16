#!/bin/bash
cd /home/ec2-user/server
curl -sL https://rpm.nodesource.com/setup_19.x | sudo bash -
sudo yum install -y nodejs