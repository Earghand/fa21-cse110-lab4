1. Line 12 will print "3" because "var i" is defined within the scope of the function, discountPrices. Since the for loop goes from i to prices.length, which is 3, and the console.log() statement is still inside the function, it maintains the value of i, being 3.
2. Line 13 will print "150" because in the loop, "discountedPrice" is reinitialized to be the value of prices[i] * (1-discount). In this case, the last value in our list, prices, is 300, and discount is 0.5, which means that (300 * (1-0.5)) = 150.
3. Line 14 will print "150" because as referred to in our last question, the value of discountedPrice on the last index of our loop will be 150. FinalPrice is just the (discountedPrice * 100), rounded to the nearest whole number, and then divided by 100. This would just be the same value we started with in "discountedPrice" since (150*100) = 15,000 which is already a whole number that does not need to be rounded. 15,000/100 will then be 150.
4. The function will return "[50, 100, 150]". These values are obtained from passing in the prices [100, 200, 300] and applying a 0.5 == 50% discount on those items. This function will use the value, discount, to calculate the discounted price of each of the values passed into the list, prices, and round each one to the nearest whole number.
5. The program will error because "i", which was declared using "let", is only defined in the for loop block. The console.log() statement is outside of the for loop block "i" was defined in, causing it to error.
6. The program will error because "discountedPrice" was declared with the "let" keyword inside of the for loop. Since we are trying to console.log() that value after the for loop block, the program will error since we are trying to access that variable outside of the block it was declared in.
7. Similar to the value of finalPrice, line 14 will print the value, "150". This is because we declared finalPrice in the beginning of the function, which is in the same code block as the console.log() statement. Inside our loop, we just continuously reassign the value of finalPrice.
8.  This function will return "[50, 100, 150]" again because the list, "discounted" was defined in the beginnning of the function and returned at the end of the function, which is in the same code block. Inside of the for loop, we keep pushing in "finalPrices" for each item in the "prices" list inside the "discounted". 
9.  The code causes an erorr because "i" is declared using the "let" keyword, and is initialized inside of the for loop. "i" is only defined inside of the for loop, which is the only code block where it can be accessed.
10. Line 12 will print "3" because length is defined at the top of the function, which is the same code block as the console.log() statement. "length" is just the length of the list, "prices", which is 3. The variable "length" is also never reassigned inside of the function.
11. The function will return: "[50, 100, 150]" because it will return the same output as explained in the previous questions. In this version of the problem, we do not have the Math.round function, which is fine since we are dealing with whole numbers. Having "discounted" be a const does not make any difference with pushing values into it because we are not reassigning the list.
12. 

    A.  student['name']
    
    B.  student['Grad Year']

    C. student['greeting']()

    D. student['favorite teacher']['name']

    E. student['courseLoad'][0]

13.

    A. 32, because we are concatenating the string '3' with the number 2. The integer 2 mapped to its exact string representation, being 2.
    
    B. 1, because in JavaScript, you can not subtract strings. Therefore, the string, 3 was converted to an integer 3 so that 3-2 would be a valid statement.

    C. 3, because the in this arithmetic, the value, null is converted to 0.

    D. 3null because we are concatenating 3 with the string value of null, being null.

    E. 4, because we are adding the integer value of true, being 1 with 3. This turns into (3+1) = 4.

    F. 0, because in this arithmetic, we are adding the numerical value of false and null, which are both 0. Therefore, this becomes (0+0) = 0.

    G. 3undefined because we are concatenating the string '3', with the string value of undefined, being 'undefined'.

    H. NaN, because in String subtraction, '3' and undefined are converted to integers. However, the numerical value of undefined is NaN, which is why it was unable to return a number from the operation.

14.
    
    A. true, because we are converting the '2' to the integer representation, 2 to do the comparison with the integer, 1.

    B. false, because when comparing 2 strings, we know that 1, being the first digit in the string '12', is less than '2'.

    C. true, because the string '2' is converted to the integer value 2, which makes the comparison into (2 == 2).

    D. false, becuase with the '===' operator, the values of the variables must be the same and they must be the same type of variable. In this instance, we are comparing the string, 2 and the integer, 2, which are not of the same type.

    E. False, in this scenario, the boolean value true is converted to its numerical value, being 1. 1 is not equal to 2, which is why this is false.

    F. true, because the Boolean() function returns true if any integer value besides 0 is passed in. Therefore, we are just comparing true === true


15 . The difference between the == and === operator in JavaScript is that the == operator only checks if the comparison is of the same value but not the same type of object. In the === case, even though we may have the same value between 2 and '2', they are not of the same type of object. for === to be true, the comparison must have the same value and same object type.

17 . The result of this code returns [2,4,6]. In this function, we are passing in the array [1,2,3] to the modifyArray function and are using the callback function doSomething, which returns any number passed into it, multiplied by 2. In the modifyArray function, we are creating an empty array, newArr. We then loop the array we passed into the function and push the return result of the callback function, doSomething, on each element of the array. Therefore, we are pushing, [1 * 2, 2 * 2, 3 * 2], which yields the return result from newArr of [2,4,6].


19 . The output of the code should be:
    
        1

        4

        3

        2
    
