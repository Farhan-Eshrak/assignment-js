//https://github.com/Farhan-Eshrak/assignment-js


//kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    else if (kilometer < 0) {
        var error = console.log("distance can't be negative");
        return error;
    }
    else {
        console.log('input error')
    }
}


//budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var watchcost = Math.round(watch) * 50;
        var mobcost = Math.round(watch) * 100;
        var lapcost = Math.round(laptop) * 500;
        var total = watchcost + mobcost + lapcost;
        return total;
    }
    else if (watch < 0 || mobile < 0 || laptop < 0) {
        var err = console.log("error! values can't be negative");
        return err;
    }
    else {
        return console.log("error!check inputs and make sure to enter three values")
    }
}


//hotelCost
function hotelCost(days) {
    if (days >= 0) {
        if (days <= 10) {
            var cost = Math.round(days) * 100;
            return cost;
        }
        else if (days > 10 && days <= 20) {
            var day = days - 10;
            var firstcost = 10 * 100;
            var secondcost = Math.round(day) * 80;
            var cost = firstcost + secondcost;
            return cost;
        }
        else if (days > 20) {
            var day = days - 20;
            var firstcost = 10 * 100;
            var secondcost = 10 * 80;
            var thirdcost = Math.round(day) * 50;
            var cost = firstcost + secondcost + thirdcost;
            return cost;
        }
        else {
            console.log("error");
        }
    }
    else if (days < 0) {
        console.log("error!days can't be negative");
    }
    else {
        console.log("error");
    }
}


//megaFriend
function megaFriend(array) {
    var longestWord = "";
    array.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}
