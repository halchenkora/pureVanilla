<!-- All of the elements of array should be strings, because if we add some elements, which are considered
as numbers, it is possible to have an unxepected results. For example, if the hexadecimal value of variable
 ${random} contains two digits, which have type of 'number', they will be summed up.
Case 1: #23ef6a will return => #5ef6a, because first to digits are numbers and the will be added.
To avoid this problem, all of tle elements of array should be turned into string elements. In this
case all of the elements will be concatenated and the code will work without errors -->
