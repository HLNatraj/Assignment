/*2. Upside down pyramid
*********
 *******
  *****
   ***
    *      */

let n = 5; 
for (let i = n; i >= 1; i--) { 
	let str = "* "; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}

 /* Input:let n = 5;  */

/*  Output
 * * * * * * * * * 
 * * * * * * * 
  * * * * * 
   * * * 
    *      */