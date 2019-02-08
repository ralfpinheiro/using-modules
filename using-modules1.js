// Create a module that exports a function that takes a number as a parameter
// and stores it in a list. The list should not be accessible from outside the module.

// Export another function that returns a version of the data list that is sorted
// in ascending order. 

//The function you use to sort the data correctly should not be accessible from outside the module.
// (Think back to the Custom Sorting Exercise when handling sorting)

// Implement a Node.js script that imports the functionality of your module, adds at least 5 different
// data points to the module's data list, and outputs the sorted list.

// The list should be secured
var secureList = [3, 13, 1, 8, 2];
// This is gonna receive content from the secure list before content being sorted
var newList = [];
// This function sorts the items ascending mode
function mix(a, b){ //causes an array to be sorted numerically and ascending
    return (a - b) 
};
// This is the public function that will perform the sorting
exports.magic = function(){
    // New variable clones the secure list
    var newList  = secureList.slice(0);
    // Public list is define as the cloned list
    this.publicList = newList;
    // Public list is defined to be sorted [sort()] taking the mix function as a parameter to make items ascending
    this.publicList = this.publicList.sort(mix);
};



