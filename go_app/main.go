// Created by: Mariam Kasim
// Created on: March 2023
//
// This program finds does multiplication

package main

import (
	"fmt"
)

func main() {
	var number1 int
	var counter = 0
	var total = 0

	// input
	fmt.Println("Let's do addition!")
	fmt.Println("Enter the first number:")
	fmt.Scanln(&number1)

	// process
	for counter <= number1 {
		total += counter
		counter = counter;++
	}

	// output
	fmt.Println("")
	fmt.Println("The sum of all positive numbers from 0 to", number1, "is", total)
	fmt.Println("\nDone.") 
}
