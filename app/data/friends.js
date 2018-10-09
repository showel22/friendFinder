
let friendsList = [
    {
        "name": "Google",
        "photo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];

module.exports = {
    list: friendsList,
    findMatch: function (friend) {
        let highestScorer;
        let highestScore = 0;
        this.list.forEach(function(friendInList, i) {

            // Subtract two arrays values and reduce to a single value by adding everything together.
            var difference = Math.abs(friend.scores.map(function (item, j) {
                return item - friendInList.scores[j];
            }).reduce(function (total, num) {
                return total + num;
            }));
            if (difference > highestScore){
                highestScorer = i;
            }
        });
        this.list.push(friend);
        return this.list[highestScorer];
    }
};