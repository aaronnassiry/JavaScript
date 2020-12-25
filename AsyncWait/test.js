function resolveAfter2Seconds() {
    for (i=0; i<100000000000; i++){
      
    }
}

async function myFunc() {
  console.log('calling');
  await resolveAfter2Seconds();
  console.log("life goes on while we wait for func to finish.");
}

myFunc();

