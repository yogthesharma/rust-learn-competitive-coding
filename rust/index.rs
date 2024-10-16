mod birthday_cake_candles;
mod staircase;

fn main() {
    staircase::staircase(6);
    birthday_cake_candles::birth_day_cake_candles(&[4, 2, 3, 3, 4]);
}
