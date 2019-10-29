let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
//Task 1: Let’s split the string into individual words and save them in a new array called storyWords.
const storyWords = story.split(' ');
//Task 2: Log how many words there are in this story to the console.
console.log(storyWords.length)

let overusedWords = ['really', 'very', 'basically'];

// Task 3: There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.

let unnecessaryWords = ['extremely', 'literally', 'actually'];
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

// Task 4: you want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.

let overusedWordsCounter = 0
let reallyCounter = 0
let veryCounter = 0
let basicallyCounter = 0
for (i = 0; i <= betterWords.length; i++) {
    if (betterWords[i] === overusedWords[0]) {
        overusedWordsCounter++
        reallyCounter++
    } else if (betterWords[i] === overusedWords[1]) {
        overusedWordsCounter++
        veryCounter++
    } else if (betterWords[i] === overusedWords[2]) {
        overusedWordsCounter++
        basicallyCounter++
    }
}
console.log(overusedWordsCounter)
    //Task 5: Now, count how many sentences are in the paragraph.
let sentences = 0
const findSentences = storyWords.forEach(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === "!") {
        sentences += 1
    }
})

// Task 6:Log these items to the console: The word count, The sentence count, The number of times each overused word appears, You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

console.log(sentences)
console.log("The word count is " + storyWords.length)
console.log("the 'really' count is " + reallyCounter)
console.log("the 'very' count is " + veryCounter)
console.log("the 'basically' count is " + basicallyCounter)

// Task 7: Now, log the betterWords array to the console as a single string.
console.log(betterWords)