// Fisher-Yates-Durstenfeld shuffle algorithm
// use w/http://www.tablesgenerator.com/markdown_tables
//
function shuffle(sourceArray) {
  for (var n = 0; n < sourceArray.length - 1; n++) {
    var k = n + Math.floor(Math.random() * (sourceArray.length - n));

    var temp = sourceArray[k];
    sourceArray[k] = sourceArray[n];
    sourceArray[n] = temp;
  }
  return sourceArray;
}

//for (var student in students) { console.log(students[student].Name) }
