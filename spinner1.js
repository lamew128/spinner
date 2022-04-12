let i = 0;
while(i < 3200) {
  setTimeout(() => process.stdout.write('\\\r'), i);
  i += 200;
  setTimeout(() => process.stdout.write('|\r'), i);
  i += 200;
  setTimeout(() => process.stdout.write('/\r'), i);
  i += 200;
  setTimeout(() => process.stdout.write('-\r'), i);
  i += 200;
}
