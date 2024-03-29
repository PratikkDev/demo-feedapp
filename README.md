# demo-feedapp

# Steps for BACKEND

## Step: 1. Install NGRok in your device

### Mac "brew install ngrok/ngrok/ngrok"

### Windows "choco install ngrok"

## Step: 2. Signup in https://dashboard.ngrok.com/signup

## Step: 3. Open this link: "https://dashboard.ngrok.com/get-started/your-authtoken"

## Step: 4. Run the first command from the above in your terminal

## Step: 5. Run the run command : "ngrok http 4001"

### Copy your ngrok link from the terminal and replace it with "PROJECT_PATH" in Backend/.env

### Also replace this link in react native project API_URL in src/common/Constant.js

## Step: 6. Run the command in your terminal "cd Backend"

## Step: 7. Go to your project directory and run "npm i"

## Step: 8. Run the command : "npm start"

# Steps for FRONTEND

# Make sure that your backend code is running

## Step: 1. Change the API_URL in Frontend/src/common/constan.js

## Step: 2. Run the command in your terminal "cd Frontend"

## Step: 3. yarn or npm i

## Step: 4. npx expo start

## Step: 5. Press 'a' for android and 'i' for ios in your terminal where your metro server is running
