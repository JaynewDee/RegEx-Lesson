# Understanding Regular Expressions

*This gist serves as a standard introduction to the essential understanding required to write and use Regular Expressions in our code.*    
> **Let's jump right in!**

## *What is a Regular Expression?* (RegEx)

`/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`

> Whether one is familiar with some of the standard tools used in programming or just starting out on their coding journey, the line of code above will likely appear cryptic, and perhaps even non-sensical.  
But this series of characters is in fact a very commonly used way for programmers to get very specific about the kind of instructions they write to a computer.  It is called a Regular Expression, commonly referred to as a 'RegEx', and this lesson is intended to illuminate and clarify the essential syntactical rules that Regular Expressions use to represent a possible search value.  
The RegEx shown above is an example of one that can be used to check, or validate, if a URL string is formatted properly, and it will serve us well as we discuss the key concepts covered throughout this lesson.
> It's time to decode this message, and from there we're learn how to write our own.
>> Take one more hard look at the RegEx above, and do your best to guess at where the patterns lie.  Then prepare to join me as we break down the expression bit by bit.  
>> *Time to dive into the decode!*

## *Table of Contents*
### (*Internal navigation links*)
- [Literal Notation](#literal-notation)
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## *Components*
> *Feel free to click on any of these key terms to further explore their ideas as your curiosity compels you.*  
> *You will be redirected to an external site with loads of additional information and resources authored by programming minds to aid in your journey toward RegEx mastery!*  
  
> #### **Key Terms:**  
> ##### (*External navigation links*)
>> - [Literal Notation](https://www.c-sharpcorner.com/UploadFile/b1df45/consor-vs-literal-notation-in-javascript/)
>> - [Anchors](https://www.regular-expressions.info/anchors.html)
>> - [Quantifiers](https://docs.microsoft.com/en-us/dotnet/standard/base-types/quantifiers-in-regular-expressions)
>> - [Grouping Constructs](https://www.yellowbrick.com/docs/5.2/ybd_sqlref/regex_capturing_noncapturing_groups)
>> - [Bracket Expressions](https://www.gnu.org/software/grep/manual/html_node/Char-Classes-and-Bracket-Expressions.html)
>> - [Character Classes](https://www.regular-expressions.info/charclass.html)
>> - [OR Operator](https://javascript.info/regexp-alternation)
>> - [Flags](https://www.codeguage.com/courses/regexp/flags)
>> - [Character Escapes](https://www.jmp.com/support/help/zh/15.2/index.shtml#page/jmp/escaped-characters-in-regular-expressions.shtml)  
  
      
> *Note: The click-through links contained within the term discussions may send you to an external site.*
___  
___
___
> - ### **Literal Notation**
>>>  *Literal vs. Constructor* <br>
>>>>  There are two different ways to store a RegEx value: Literal notation and Constructor notation. When we use literal notation, our code engine stores the value at compilation, meaning just before the program actually runs.  This can make our program run faster because the engine has already done some work evaluating the code.  Constructor notation, on the other hand, allows us to store a RegEx value which is evaluated at runtime, meaning just as the line of code is being read.  Simply put, this means that our code will run fastest if compiled values are not changed at runtime.  So, depending on the application of our program, it should be best to use literal notation when we know that the value of our RegEx will not be changing.  For the sake of this lesson, we will assume that our URL-validating RegEx is being stored through **literal** JavaScript notation, e.g.  
`let regURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`  
>>>  
>>> *Note: using literal notation requires that the regexp be wrapped in backslashes, similar to the quotation marks used to indicate a string in JavaScript.*  
___  
___
___  
> - ### **Anchors**
>>>  `^ / $` <br>
`startLine/finishLine`
>>>>  Employing what you know of nautical anchors, you may be able to make a solid guess as to the function of anchor characters in regular expressions.  [Anchors are unique](https://javascript.info/regexp-anchors) in that they don't check for character matches but instead determine positioning, as a dropped anchor secures the position of a ship at sea. The computing engine needs to know **where** to check for matches of a given token, and the anchor character provides that information.  
Notice that our url-matcher expression begins with a carat symbol, `^`, and ends with a dollar sign, `$`. These are our anchors.  Essentially, they tell the engine 'Here(`^`) is where the string to match starts, and here(`$`) is where the string to match ends.'  
>>  
>>  *Note: These are only the basics of using and understanding the versatile [anchor character]().*
___  
___
___
> - ### **Character Escapes**
>>> `\`  
*Normalizing special characters* <br>
>>>>  Often while using regular expressions we want to match a literal character, like the plain, lowercase letter 'd'. But the letter 'd' can also be used as a special character to mean 'any digit 0 through 9'.  In order to use 'd' as a special 'digit' character, we simply *escape* the default literal expression of the token by including a forward slash (`\`) immediately before.  Inversely, some characters are special by default, such as the period, or dot (`.`).  The default match for this special character is ... well, basically any other character.  But, what if we need our RegEx to match a literal period or decimal in a string?  Again, this is where **character escapes** come in.  We use the escape backslash `\` to escape the dot's default expression and force it to search for a literal match.  
Our url-matching RegEx is an excellent example of character escapes in action:  
>>>>>  
>>>>> - `\/` : This allows us to escape the special forward slash character, which by default demarcates the beginning of our RegEx, and search instead for the pair of literal forward slashes we need to properly match a URL.  
>>>>> - `\d` : Here, we do not want to search for a literal 'd' letter, but instead we escape into a special 'digit' character, allowing us to accept any single digit number in our search.
>>>>> - `\.` : As mentioned before these examples, when we want to search for a literal period, as in '.com', we have to escape the special wildcard nature of the dot, turning it into a literal character to be searched. 
>>>  
>>> *Note: Some special characters, like the dot (`.`) behave differently inside bracket expressions. Consult [stack overflow](https://stackoverflow.com/questions/19976018/does-a-dot-have-to-be-escaped-in-a-character-class-square-brackets-of-a-regula) for a detailed explanation of these kinds of rule exceptions.*
___
___
___
> - ### **Quantifiers**
>>>  ![MDN Docs RegEx quantifiers table](/assets/imgs/quantifiers.jpg 'Credit: MDN Web Docs')  
>>>  Image Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers> <br>
>>>>  **Quanitifiers** are a type of special character used in RegEx syntax to tell the expression how many times to match a preceding character or group of characters.  Using the table above provided by [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers), we can compare our url-matcher to see just how our quantifier characters are being applied:  
>>> - `https?`  
>>>>> The `?` here is used to say 'this character should be matched either 0 or 1 time(s)'.  This means that the quantifier will allow for the RegExp to accept a url that either does or does not contain the 's' after 'http', which simply signifies that the connection at that resource location is secure.  Part of the awesomeness of regular expressions is their flexibility.  We want to include this bit so that a url can pass validation given either case, 'http' or 'https'.  
>>> - `(https?:\/\/)?`  
>>>>> This bit follows the same rule as the one above, except this time, we are allowing the expression to search 0 or 1 time(s) for the entire string of characters within the parentheses: `https://`  
(*Note: the forward slashes don't count because they are 'Escape Characters'. Navigate to the Character Escapes section to learn more*)
Most users don't take the time to type out this bit of a url because the browser can handle this for us.  Whether or not we include this string of characters before our url, the browser usually still understands where to find the resource. However, we include this bit of the expression so that a url with or without the string 'http://' or 'https://' can still pass validation.  
>>> - `[\da-z\.-]+`
>>>>> Our second quantifier in question, the `+`, will tell the expression to match the preceding character(s) **at least** once.
>>> - `[a-z\.]{2,6}`
>>>>> Our quantifier here is demarcated by the curly braces.  The first number, 2, specifies the minimum quantity of the preceding characters that the string must contain, and the second number after the comma, 6, specifies the maximum quantity.  So in this case we are telling the RegEx to validate that the string can contain any lowercase letters and periods, as long as the string contains at least 2 of those characters and no more than 6.
>>> - `[\/\w \.-]*`
>>>>>  The '*' quantifier will match 0 or more of the preceding character(s).  Our string will pass if it contains any number of words, backslashes, periods, or dashes(-).  
>>> TLDR:  
The computer needs to know *how many* of a character or set of characters to search for, and **Quantifiers** are how we relay that information.  
>   
> #### For further consideration:  
>> [Lazy Quantifiers vs Greedy Quantifiers](https://stackoverflow.com/questions/2301285/what-do-lazy-and-greedy-mean-in-the-context-of-regular-expressions)
___  
___
___  
> - ### **Grouping Constructs**
>>> `()`  
*Containers for sub-expressions* <br>
>>>>  In their most straightforward usage, the `()` grouping constructs allow us to enclose a piece of our RegEx to be evaluated independently of discluded tokens.  To help clarify this, let's take a look at the following examples:
>>>>>    
>>>>>  1. `fo{2}\.bar`
>>>>>  2. `(fo){2}\.bar{2}` 
>>>>>  3. `(foo\.bar){2}`
>>>>>  
>>>> Example 1 does not use grouping constructs.  The `{2}` quantifier states 'The preceding character, o, must appear exactly twice.'  Example 2, however, does create a group using our constructs. Because the 'fo' characters are part of the same group, the following quantifier (`{2}`) will treat them as a single token.  This small difference produces a very different expression.  The grouping construct changes the quantifier's meaning: 'All of the characters in the preceding group must appear exactly twice'.  In the first example, the string must be 'foo.bar' to match the RegEx, but in the second, the string must be 'fofo.barr'.  In our final example, because our constructs create a group of all of the characters, only the string 'foo.barfoo.bar' will match.
>>>  
>>> *Note: These are only the basics of grouping constructs. Once you feel confident with the essential usage explained here, try using your favorite search engine to explore the idea of 'matching captured groups' in regular expressions.*
___  
___
___  
> - ### **Bracket Expressions**
>>>  `[]`  
*Matching one character to multiple possibilities* <br>
>>>>  The brackets surrounding a set of characters, as in `[\da-z\.-]` of our url-matcher, enclose 2 or more potential matching characters.  Let's explore this idea by taking a look at the instances of bracket expressions contained within our example RegEx: `/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`
>>>>>  
>>>>>  1. `[\da-z\.-]`  
>>>>>  2. `[a-z\.]`  
>>>>>  3. `[\/\w \.-]`
>>>>>  
>>>>  The most important rule to remember here is that only one of the characters included within the brackets will be matched.  The first expression includes: digits 0 through 9 (`\d`), all lowercase letters (`a-z`), periods (`.`) and dashes (`-`).  So, without a following quantifier or other special character modifier, e.g. the `+` quantifier in `[\da-z\.-]+`, the evaluator will match any one of these potential characters and then move on from the bracket expression.  Visit the other sections in this guide for all of the knowledge needed to decode the other two examples yourself!  
>>>  
>>>  #### Tips:  
>>>> - Use a carat (`^`) at the beginning of the bracketed expression to negate any included characters instead.  
>>>> - To match a `]`, put it as the first character after the opening `[` or the negating `^`.  
___  
___
___
> - ### **Character Classes**
>>>  *Matching by character type*  <br>
>>> ![Chart of character classes from outside source](/assets/imgs/classes.png 'regular-expressions.info/posixbrackets.html')  
Image source: <https://www.regular-expressions.info/posixbrackets.html>  
*IMPORTANT: POSIX-type class expressions are not supported in JavaScript, the programming language our example is based in.* 
>>>>  The table above ( Copyright ?? 2003-2021 Jan Goyvaerts. All rights reserved. ) shows us some of the various character types that can be expressed by abbreviation.  Their likeness is what puts them in the same class.  `[a-z]`, for example, is a character class because all of the possible matches expressed belong to the same category: all latin-based, lower-case letters. As you can see, our url-matching example, `/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`, employs the same character class twice to avoid the redundancy of literal typing.  Without character classes, large categories of characters would need be typed out individually, resulting in absurdly long, headache-inducing expressions.  
>>>>  *Praise the Class!*  <br>
___
___
___
> - ### **The OR Operator**
>>> *This|That, One|Other* <br>
>>>>  The OR operator is semantically precise and surprisingly unambiguous relative to most other RegEx concepts, functioning just about exactly as it sounds.  The vertical bar `|` is used to express that a match can be made by the characters on either of its sides.  Our URL doesn't employ the OR operator!  
So let's consider this example instead:
>>>>>
>>>>>  `/(basket|foot)ball/`
>>>>>  
>>>> As discussed in the [Grouping Constructs](#grouping-constructs) section of this lesson, the parentheses create a closure which excludes the `ball` portion of the expression so that only the sets `basket` and `foot` will be evaluated by the OR operator.  Both strings `'basketball'` and `'football'` can be matched by this regular expression.
___
___
___
> - ### **Flags**
>>> *Applying general rules* <br>
>>>>  Flags allow us to define certain parameters that will be applied to the entire expression. When using literal notation to store our regular expressions, any flags should be included just after the closing backslash.  The following is a list of flags usable with any regular expression:  
>>>>>  
>>>>> - `g` : The search will find all matches.  Only the first match is returned if this flag is not used.  
>>>>> - `m` : Enables multiline mode.  
>>>>> - `i` : Makes your search case-*in*sensitive. e.g. `[a-z]` and `[A-Z]` will find the same matches.  
>>>>> - `s` : Enables 'dotall' mode, meaning that the dot (`.`) token will also match the characters it is usually excluded from, such as the newline character `\n`.
>>>>> - `u` : Enables full Unicode support. (With this flag, a regexp handles 4-byte characters correctly.  Some single characters are mis-interpreted as two characters because the code for them uses 4 bytes rather than 2. For more information about this quandary: [What is a surrogate pair?](https://stackoverflow.com/questions/31986614/what-is-a-surrogate-pair))
>>>>> - `y` : Enables ['Sticky' mode](), allowing our RegEx to begin its search at a specific position in the source string.  
>>>  
>>> *Note: Our example RegEx doesn't use any flags, but it could!  If we were working with multiple URLs strung together, we could use the `y` flag to enable sticky mode and track the position of our regex execution so that subsequent searches can be made starting at the next URL in the string!*
___
___
___
>> ## ***Summary***  
>>>>  #### *Putting the Pieces Together*  
>>>>> 
>>>>>>  ### `/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`  
>>>>  
>>>> - `/^` : The backslash(`/`) introduces the expression, and the carat(`^`) anchors itself at index position -1.  
>>>> - `(https?:\/\/)?` : Our grouping constructs open to initiate a group definition, a collection of search options bundled together to receive the same modifiers. Literal search `http` and `s?` renders the `s` optional to cover exceptions. Either `http` or `https` will match. Literal `:`.  Pair of escaped backslashes `//` match to meet URL standards. Closing construct parenthesis closes the boundary on our character group. Finally, the `?` makes the entire group of characters an optional search, and if matched cannot be matched again.  
>>>> - `([\da-z\.-]+)` : Group initiated through `(`.  `[` begins a bracket expression, checking for a match among any digits `\d`, any lowercase letter `a` through `z`, escaping the special case of the solitary dot `.` to include literal `.` characters, include any `-` characters, then `]` closes the bracket expression around the group. Quantifier `+` says 'make at least one match out of the bracketed group'. Finally, `)` closes the bounds on the greater group. The entire phrase translates: 'The URL **must** start with *at least one* of the included characters.'  
>>>> - `\.` : Requires a match of a literal `.`.  
>>>> - `([a-z\.]{2,6})`  : A possible match includes periods `.` and any lowercase letters `a-z`. <br>Quantifier `{2,6}` determines: 'Match one of these characters at least twice and no more than 6 times'.  <br> `)` construct closes and captures the group. 
>>>> - [`([\/\w \.-]*)*\/?`](#table-of-contents 'This is the final bout! Hang in there...') : We open again by introducing a group `(` and bracket expression `[`. The characters possible to match are backslash `/`, any word `\w`, a space, a period, or a dash.   Quantifier `*` says 'match one of the bracketed characters at least zero times' (In other words, any number of these classes of character are allowed, but none of them are required). `)` closes and captures the group and again we are met with the wildcard quantifier that says 'let any number of these characters happen if they're included in the evaluated expression'.  We escape the special character `/` for a literal and then `?` says '`/` can happen once or not at all.'  
>>>> - `$/` : Our lovely RegEx concludes with our ending anchor, at position `regExURL.test(str).lastIndex - 1`, and finally the backslash `/` required by JavaScript to properly interpret the string as a Regular Expression.

## ***Conclusion***
  
  #### Friend, if you've made it all the way here from the beginning, I hope you've gathered something of value out of what I've written here.  Something that might help you or inspire you on your coding journey.
  >#### *Keep going, keep growing, keep decoding!*
  
>>>>>>>>> ----- Joshua <br> <br>  

*\*Secret\** : If you have access to the node runtime environment, you may clone this repository, navigate to the root directory of your clone, and run the command `node test.js` to test a set of mock urls and their match result given our RegEx.

## About the Author

> ### *Joshua Newell Diehl*
>>>  
>>> is a budding developer currently based in Ft Worth, Texas.  He enjoys coding, long romantic hours dead asleep, walks with his dog Margot, and *creepily* referring to himself in third person.  
>>>>  
>>>> Here are a few of his favorite technologies at the moment:
>>>> - [Node.js](https://nodejs.org/en/)  
>>>> - [Materialize.css](https://materializecss.com/)  
>>>> - [React.js](https://reactjs.org/)  
>>>> - [MongoDB](https://www.mongodb.com/)  
>>>>  
>>  
>>> And here is where you can reach me [||](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR 'Javascript OR Operator') review the work I've been doing.  
>>>> ~ Let's build something.  
>>>
>>> [GitHub](https://github.com/JaynewDee, 'Repositories authored by Joshua Newell Diehl')  
>>> [Email](mailto:jdiehl2236@gmail.com)