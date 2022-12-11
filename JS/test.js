// ----------- artguments -----------------
function add(a, b) {
    console.log('1.', arguments);
    console.log('2.', arguments[0]);
    console.log('3.', typeof arguments);
    return a + b;
  }
  
  console.log(
    '4.', add(1, 3, 5, 7)
  );
  
  function add(a, b) {
    for (const arg of arguments) {
      console.log(arg);
    }
    return a + b;
  }
  
  console.log(
    add(1, 3, 5, 7)
  );  