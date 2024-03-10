/* 3. diamond shape

    *
   *** 
  *****
 *******
*********
 *******
  *****
   ***
    *       */

let n = 5; 
for (let i = 1; i <= n; i++) { 
	let str = "* "; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i)); 
} 



for (let i = n - 1; i >= 1; i--) { 
	let str = "* "; 
	let space = ' '; 
	console.log(space.repeat(n - i) + str.repeat(i)); 
}

/* I/p let n = 5; 
 */

/* Output
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 * * * * 
  * * * 
   * * 
    *  */