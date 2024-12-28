let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    // Method to build the sentence
    buildSentence: function () {
        return this.subject && this.verb && this.object
            ? `${this.subject} ${this.verb} ${this.object}`
            : "Incomplete sentence";
    },

    // Method to update properties dynamically
    updateProperty: function (property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value;
            return `${property} updated to "${value}"`;
        } else {
            return "Invalid property";
        }
    }
};

// Example Usage:

// Example 1
console.log(sentenceBuilder.buildSentence()); // Output: "I am coding"

// Example 2
sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence()); // Output: "I am learning coding"

// Example 3
sentenceBuilder.updateProperty("subject", "The cat");
console.log(sentenceBuilder.buildSentence()); // Output: "The cat am learning coding"

// Example 4
console.log(sentenceBuilder.updateProperty("mood", "happy")); // Output: "Invalid property"

// Example 5
sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence()); // Output: "Incomplete sentence"
