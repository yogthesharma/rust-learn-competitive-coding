function staircase(n) {
  for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(size - i) + "#".repeat(i));
  }
}

staircase(5);
