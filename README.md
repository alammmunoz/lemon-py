# Lemon-Py

Lemon-Py is a library for implement Python functions in Javascript. 
Initially we focus on Strings.


##Installation

```
npm install lemon-py
```


## Import

```
import LemonPy from 'lemon-py'
```


## Functions and use

- str(): return the Object in String format.

```
let strText  = new LemonPy(9600);
let strPrint = strText.str();
console.log(strPrint);
```

- upper(): return the Object in String format and uppercase.

```
let upperText  = new LemonPy("karem");
let upperPrint = upperText.upper();
console.log(upperPrint);
```

- lower(): return the Object in String format and lowercase.

```
let lowerText  = new LemonPy("DONATELLA");
let lowerPrint = lowerText.lower();
console.log(lowerPrint);
```

- count(argument): count and return the number of arguments is in this object.

```
let countText  = new LemonPy("Two forensics scientists in Central City are killed by a mysterious man wielding a spear with a lightning bolt-shaped tip.");
let countPrint = countText.count("a");
console.log(countPrint);
```

- find(argument, positionInitial): return the position of argument, start by the positionInitial.

```
let findText  = new LemonPy("Barry is visiting the Flash Museum, trying to catch up with events that occurred during his absence, when he meets Green Lantern");
let findPrint = findText.find("Flash");
console.log(findPrint);
```

- len(): return the length of the Object.

```
let lenText  = new LemonPy("Tokyo");
let lenPrint = lenText.len();
console.log(lenPrint);
```


## Credits
- [Alan Munoz] (https://www.github.com/alammm)


## License

- [MIT] (https://opensource.org/licenses/MIT)