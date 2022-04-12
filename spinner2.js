let j = 0;
let bar = ["\\", "|", "/", "-"];
for (let i = 0; i < 3200; i += 200) {
  setTimeout(() => {
    process.stdout.write("\r" + bar[j] + "  ");
    j++;
    if (j === 4) 
      j = 0;
  }, i);
}
setTimeout(() => process.stdout.write("\r"), 3400);