// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    // const inventors = [
    //     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    //     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    //     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    //     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    //     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    //     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    //     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    //     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    //     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    //     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    //     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    //   ];
  
      // const people = [
      //   'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      //   'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      //   'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      //   'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      //   'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      // ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's

      //const fifteen = inventors.filter(inventor => (inventor.year > 1500 && inventor.year < 1600));
      //console.table(fifteen);
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names

      //const firstLast = inventors.map(names => (names.first + " " + names.last));
      //console.table(firstLast);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest

      //const bDay = inventors.sort((a, b) => a.year < b.year ? 1 : -1); // "?" = znaczy to tyle co "if its true, return something(w tym przypadku 1), : = znaczy tyle co else, w tym przypadku return -1
      //console.table(bDay);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?

      // const totalYears = inventors.reduce((total, inventor) => {
      //   return total + (inventor.passed - inventor.year);
      // }, 0);
      //console.table(totalYears);
  
      // 5. Sort the inventors by years lived

      // const yearsLived = inventors.sort((a, b) => {
      //   const lastGuy = a.passed - a.year;
      //   const nextGuy = b.passed - b.year;
      //   return lastGuy > nextGuy ? 1 : -1;
      // });

      //console.table(yearsLived);
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      //const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

      const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 },
      ];

      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good!', id: 823423},
        { text: 'You are the best!', id: 2039842 },

      ]

      const isAdult = people.some(function(person) {  //some = is atleast 1?
        const currentDate = (new Date()).getFullYear();
        if(currentDate - person.year >= 18) {
          return true;
        }
      })

      const isAdult2 = people.every(person => currentDate = ((new Date()). //every = is everybody at least 18?
      getFullYear()) - person.year >= 19);

      //console.table(isAdult);   

      const findId = comments.findIndex(commentId => commentId.id === 823423);
      comments.splice(findId, 1); //usuwam z ogrginalnej tablicy zmieniajac ja

      const newComments = [ //tworze nowa tablice i w niej edytuje indexy, ciezsza metoda niz .splice. "..." === spread operator, rozstawia rzeczy w tabeli.
        ...comments.slice(0, findId),
        ...comments.slice(findId, 2)
      ]

      //console.table(findId);
      //console.table(comments);
      //console.table(newComments);

      const arr = [1, 2, 3, 4, 5];

      const add = function(a, b) {
        return a + b;
      };
      
      const subtract = function(a, b) {
        return a - b;
      };
      
      const sum = function(array) {
        return array.reduce((total, currentItem) => total + currentItem, 0);
      }
      
      const multiply = function(array) {
        return array.reduce((prod, currentItem) => prod * currentItem);
      };
      
      const power = function(a, b) {
        return Math.pow(a, b);
      };
      
      const factorial = function(a) {
        let product = 1;
        for(let i = a; i > 0; i--) {
          product *= i;
        }
        return product;
      };