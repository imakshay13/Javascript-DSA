//An Object is a collection of key-value pairs
const obj = {
  name: "user",
  age: 23,
  isValid: true,
};

/*
Insert a new key-value pair:
obj["lastName"] ='Kumar'
Time Complexity - O(1) constant


Delete a  key-value pair:
delete obj.name
Time Complexity - O(1) constant

Access a  key-value pair:
console.log(obj.name)
Time Complexity - O(1) constant

Search a value in object:
Search for "user" in obj.
So worst case scenario is the value is at last and we have to search all
Time Complexity - O(n) Linear
*/

//------------
/*
Time complexity of object inbuild methods:
1. Object.keys() -> This returns all the keys in a object
    Time complexity -> O(n)
2. Object.values() -> Returns all the values
    Time Complexity -> O(n)
3. Object.entries() -> Return key,value as an array of array
    Time Complexity -> O(n)
*/
