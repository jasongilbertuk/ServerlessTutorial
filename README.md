# AWS Serverless Tutorial

A tutorial which is based on AWS Serverless Application Model (SAM)


## SAM CloudFormation Template

The SAM (Serverless Application Model) provides a series of extentions to the CloudFormation template that dramatically simply the setup of a Serverless stack (API Gateway / Lambda / Dynamo etc).

We will use yaml and start by defining a basic SAM template that creates a basic Lambda.

Here is the full template.yaml we'll use for this stage:
```
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: AWS Serverless Tutorial
Resources:
  HelloLambda:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: HelloLambda
      Handler: index.handler
      Runtime: nodejs6.10
      CodeUri: myCode 
      MemorySize: 128 
      Timeout: 30
      Policies:
        - AWSLambdaBasicExecutionRole
```
Let's disect it a line at a time:
```
AWSTemplateFormatVersion: 2010-09-09
```
This is 


## Next step

`Checkout` the next tag to continue.