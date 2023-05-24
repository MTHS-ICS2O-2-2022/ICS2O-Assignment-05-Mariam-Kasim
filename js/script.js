// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: Mar 2023
// This file contains the JS functions for index.html

"use strict"
/**
 * This function adds up 1s until the number inputted
 */
function myButtonClicked() {
  //input
  const number = parseInt(document.getElementById("number1").value);

  // process
  let counter = 0;
  let total = 0;

  while (counter <= number) {
    total = total + counter;
    counter = counter + 1;
  }

  // output
  document.getElementById("answer").innerHTML = "The sum of all positive numbers from 1 to " + number + " is " + total;
}
