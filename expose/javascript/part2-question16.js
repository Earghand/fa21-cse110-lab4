let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const val in statistics) {
    if(val.charAt(0) == 'r' || statistics[val] % 2 == 1) {
      console.log(val);
    }
}