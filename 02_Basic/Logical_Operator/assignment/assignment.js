alert(null || 2 || undefined); // 2

alert( alert(1) || 2 || alert(3) ); // 1 -> 2

alert( 1 && null && 2); // null

alert( alert(1) && alert(2) ); // 1 -> undefined(alert 의 return 값은 undefined)

// if (14 <= age && age <= 90)
// if (!(14 <= age && age <= 90))
// if (age < 14 || age > 90)

if (-1 || 0) alert('first'); // first
if (-1 && 0) alert('second'); // 
if (null || -1 && 1) alert('third'); // thrid