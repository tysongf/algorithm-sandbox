### Analyzing Performance of Arrays and Objects

#### OBJECTS

CRUD Operations are in constant O(1) time.
Search functions in linear O(n) time.

Object.keys = O(n)
Object.values = O(n)
Object.entries = O(n)
hasOwnProperty = O(1)

#### ARRAYS

Access element = O(1)
Insert/Remove at the end = O(1) (push / pop)
Insert/Remove at beginning = O(n) (shift / unshift)
Searching = O(n)

#### Array Methods

push O(1)
pop O(1)
shift O(n)
unshift O(n)
concat O(n)
slice O(n)
splice O(n)
hasOwnProperty O(n)
forEach O(n)
map O(n)
filter O(n)
reduce O(n)
sort O(n log n)
