
let friendsList = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
        console.log("Running find match.");
        let highestScorer;
        let highestScore = 0;
        this.list.forEach((friendInList, i) => {

            // Subtract two arrays values and reduce to a single value by adding everything together.
            var difference = friend.scores.map(function (item, j) {
                return item - friendInList.scores[j];
            }).reduce(function (total, num) {
                return total + num;
            });

            if (difference > highestScore){
                highestScorer = i;
            }
        });
        this.list.push(friend);
        return this.list[highestScorer];
    }
};