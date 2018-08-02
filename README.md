# AWS Serverless Tutorial - Stage 1

A tutorial which is based on AWS Serverless Application Model (SAM).
In this stage, we'll create the most basic of lambda functions, using the SAM template.


## template.yaml     SAM CloudFormation Template 

The SAM (Serverless Application Model) provides a series of extentions to the CloudFormation template that dramatically simply the setup of a Serverless stack (API Gateway / Lambda / Dynamo etc).

We will use yaml and start by defining a basic SAM template that creates a basic Lambda.

Create a file called template.yaml. Here is the full file we'll use for this stage:
```
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: AWS Serverless Tutorial
Resources:
  MyFirstLambda:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: MyFirstLambda
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
This is standard for any cloudformation template, you don't change this. It basically tells the CloudFormation system what version of cloudformation syntax is supported. 

```
Transform: AWS::Serverless-2016-10-31
```
This is standard for any SAM based cloudformation template, you don't change this. It basically tells the CloudFormation system that this template contains serverless extensions and needs to be processed accordingly.

```
Description: AWS Serverless Tutorial
```
A textual description that will be associated with the Cloudformation stack generated.


```
Resources:
```
Defines the start of the resources section. What follows are resources that we want cloudformation to create.

```
  MyFirstLambda:
    Type: AWS::Serverless::Function
```
Our first resource is called MyFirstLambda and is of type AWS::Serverless::Function (IE: a lambda)

```
    Properties:
```
Defines the start of the Properties section for the MyFirstLambda resource.

```
      FunctionName: MyFirstLambda
```
The name of the Lambda Function

```
      Handler: index.handler
```
The file / function within file to invoke when the Lambda is triggered. See description of index.js later in this file.

```
      Runtime: nodejs6.10
```
The runtime for the lambda. In our case, the lambda code is written in nodejs and we're using v6.10 of the node runtime.

```
      CodeUri: myCode
```
The local directory (relative to the yaml file) that contains the code for the lambda (index.js)

```
      MemorySize: 128
```
The memory size required by the AWS resource that runs the lambda.

```
      Timeout: 30
```
Maximum time (in seconds) which the lambda function can run for. 

```
      Policies:
        - AWSLambdaBasicExecutionRole
```
For the lambda to run, it will need to be given one or more roles. At this stage, we will just give it
the basic execution role. Later, as we start to expand the functionality of our lamda, we will add additional roles (eg: access to dynamodb)


## myCode/index.js    our lambda function
Create a file called index.js in a subdirectory called myCode. This file will hold our nodejs lambda code.

Here is the full file:
```
'use strict';

exports.handler = function(event, context, callback) {
    const response = { 'statusCode': 200, 
                       'headers': {'Content-Type': 'application/json'},
                       'body': { 'message' : 'hello world' }};
    callback(null, response);
}
```
![Alt text](documentation/screenshot1.png?raw=true "Screenshot 1")


## Next step

`Checkout` the next tag to continue.