pub fn birth_day_cake_candles(candles: &[i32]) -> i32 {
    let mut count = 0;
    let mut largest_number: &i32 = &0;

    for (_index, number) in candles.iter().enumerate() {
        match number {
            x if x > largest_number => {
                largest_number = x;
                count = 1;
            }
            y if y == largest_number => {
                count += 1;
            }
            _ => println!("The current number doesn't satisfy the condition."),
        }
    }

    println!("{}", count);
    return count;
}
