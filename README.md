# AWS Serverless Tutorial

A tutorial which is based on AWS Serverless Application Model (SAM)


Start with the first TAG (0). Then `Checkout` the next TAG when you're ready to move onto the next step.

## Pre-Requisites
The following pre-requisite steps are required on your local machine prior to commencing these tutorials. These instructions are for the Mac. If you are on a Windows PC, sorry to hear it. Options are to buy a Mac (you won't regret it) or to find out for yourself how to setup your machine.

### Installing Homebrew
These instructions are for the Mac. If you are on a Windows PC, sorry to hear it. Options are to buy a 
Install **Homebrew**
Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's macOS operating system.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install Python
Python is an interpreted high-level programming language for general-purpose programming. It can be installed by homebrew, and is required as the AWS CLI is a python package.

```
brew install python
```

### Install the AWS CLI
The AWS CLI is the Command Line Interface for working with AWS..
It is a pythin package, installed as follows:

```
sudo pip install awscli --ignore-installed six
```

### Configuringe your AWS profile

You need to configure the AWS CLI with your AWS account credentials.

```
aws configure

AWS Access Key ID [None]: xxxxxxxxxxxxxxxxx
AWS Secret Access Key [None]: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Default region name [None]: us-east-1
Default output format [None]: json
```

## Next step

`Checkout` the next tag (1) when you have completed the above steps..