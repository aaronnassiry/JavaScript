let arr = ["a", "b", "c", "d"];
arr = [...arr, "e", "f", "g"];
arr = [0, 1, 2, ...arr]
arr.forEach(element => console.log(element));