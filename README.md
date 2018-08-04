# AWS Serverless Tutorial - Stage 2

A tutorial which is based on AWS Serverless Application Model (SAM).
In this stage, we'll add the simplest of API Gateways definitions, this is just enough to get something up and running and  is not the full scope of API gateway, we'll cover that in a subsequent stage.
[Link to previous step](https://github.com/jasongilbertuk/ServerlessTutorial/tree/1)


![Alt text](documentation/stage2.png?raw=true "Stage 2")

## template.yaml     
### SAM CloudFormation Template 

We will add to the template.yaml file we created in the previous tutorial.
Create a file called template.yaml. Here is the full file we'll use for this stage:
```
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: AWS SAM Tutorial
Resources:
  HelloLambda:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: HelloLambda
      Handler: index.lambda_handler
      Runtime: python2.7 
      CodeUri: src 
      MemorySize: 128 
      Timeout: 30
      Policies:
        - AWSLambdaBasicExecutionRole
      Events:
        MyEndpoint:
          Type: Api 
          Properties:
            Path: /test
            Method: get

```
The changes here from the previous version are just the addition of the Events section:
```
      Events:
        MyEndpoint:
          Type: Api 
          Properties:
            Path: /test
            Method: get

```


## Putting it all together
If you have not already done so, first make this file executable by running the command chmod +x publish.sh 
Now run the publish.sh shell script. If all correct, this should package and deploy your lambda.
![Alt text](documentation/screenshot0.png?raw=true "Screenshot 0")

In the AWS console, go to CloudFormation and check that your stack deployed successfully.
![Alt text](documentation/screenshot1.png?raw=true "Screenshot 1")

In the AWS console, go to Lambda and examine the myFirstLambda function deployed.
![Alt text](documentation/screenshot2.png?raw=true "Screenshot 2")


In the AWS console,run a test on the Lambda, and ensure that it executes and returns the result expected.
![Alt text](documentation/screenshot4.png?raw=true "Screenshot 4")


## Next step
[Proceed to next step](https://github.com/jasongilbertuk/ServerlessTutorial/tree/2)