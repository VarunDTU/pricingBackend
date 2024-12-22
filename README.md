# Profitability Calculator

## Overview
This is currently a Backend application that calculates various fees and profitability metrics for transactions.


### Goals(Achieved)
- Created a backend API to manage fee structures
- Dynamic fee calculation(From the api)

### API Endpoints
```http
POST /api/v1/profitability-calculator
```

## Extending the Project

How to run

1. Clone the repository
2. Install dependencies: `npm install`
3. Add an .env file following the .example.env file given
4. Run development server: `nodemon run app.ts

## API Documentation

### Calculate Profitability
http
POST /api/v1/profitability-calculator
Content-Type: application/json

Response:
```
json
{
 
"referralFee": 10,
"weightHandlingFee": 10.0,
"closingFee": 5.0,
"pickAndPackFee": 20
"totalFees": 45,
"netEarnings": 200
}
```