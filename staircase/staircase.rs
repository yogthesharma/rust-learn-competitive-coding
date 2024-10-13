fn staircase() {
    for i in 1..=size {
        let spaces = " ".repeat((size - i) as usize);
        let hashes = "#".repeat(i as usize);
        println!("{}{}", spaces, hashes);
    }
}