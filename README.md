# Calculator

Source code can be accesed at [my GitHub repository](https://github.com/petra-vozarova/calculator/tree/master/calculator),
or you can see deployed [caclulator application](https://petra-vozarova.github.io/calculator/) in action.

## Introduction

This web-application offers the functionality of a **formula calculator**. It means that it performs calculations in two steps: 

- a user enters the formula in full
- upon pressing '=' button, results are displayed

It recognizes basic mathematical operations, decimal numbers, and command to clear input in full. 

### Mathematical Operations

The user enters values by clicking on the desired buttons. The display is divided into two sections. In the upper section, all entered values are shown. In the bottom section,the most current value is shown. 

Calculator **dynamically clears input from the user** if multiple mathematical signs are entered using the most recent sign. If signs for multiplication or division are preceded by subtraction, both operations are performed.
 
### Equals
The result is displayed in the upper section of the display and any following operations are performed on the value of the result.

### ACC Button
Pressing 'ACC' buttons returns the calculator to its default state. All the memory is cleared and number 0 appears on display.

### Decimal Numbers
The calculator handles decimal numbers and allows only one decimal sign per number. 

### Maximun Length
If the user exceeds the maximum length of the input which is by default set to 21 signs, the warning message will appear on the screen saying that the maximum limit was exceeded.

### Wave Animation
This animation interacts with the calculator. When the calculation is performed. Animations access the value of the result. It compares the result against the pre-specified conditions. If any condition is met, the high of waves increases accordingly. 

## Local Deployment

To run the application locally, please download the source code from: [GitHub Source Code](https://github.com/petra-vozarova/calculator/tree/master/calculator)


###  Prerequisites

This application was written in Node.js using React and ReactDom dependencies. In order to run the application you will need to have the npm package installed on your local device.

Before starting the app, please make sure that you are in the correct directory that ends with `\calculator`.

In the command line run the following code:
`npm start`

Now, the app should be up and running on your local port.
Please navigate to:
[local deployment](http://localhost:3000/calculator)

#### Thank you for your time and interest in my calculator application. I hope that you enjoy it! 


