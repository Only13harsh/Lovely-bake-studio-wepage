<!DOCTYPE html>
<html>
<head>
    <script>
        function countVowels(str) {
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
                    count++;
                }
            }
            return count;
        }

        const testString = "Hello World";
        const vowelCount = countVowels(testString);
        console.log(`The number of vowels in "${testString}" is: ${vowelCount}`);
    </script>
</head>
<body>
    <!-- You can add HTML content here -->
</body>
</html>
