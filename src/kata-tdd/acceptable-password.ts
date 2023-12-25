export class AcceptablePassword {
    validatePassword(password: string): boolean {
        const numbers = password.match(/\d+(\.\d+)?/g);
        if (password.length > 9) {
            if (this.containsWord(password, ['password', 'PASSWORD'])) {
                return false;
            }
            return true;
        } else {
            if (numbers) {
                const numbersInPassword = numbers[0];
                const numericValues = numbers.map(Number);
                const numberInPassword = this.intToArray(numericValues[0]);
                if (this.hasDuplicateNumbers(numberInPassword) ||
                    this.hasOnlyNumberInPassword(numbersInPassword.length, password.length)) {
                    return false
                } else {
                    return password.length > 6;
                }
            } else {
                return false;
            }
        }
    }

    hasOnlyNumberInPassword(numbersInPasswordLength: number, passwordLength: number): boolean {
        return numbersInPasswordLength === passwordLength
    }

    hasDuplicateNumbers(numbers: number[]) {
        const seenNumbers = new Set();

        for (const numberString of numbers) {
            const number = Number(numberString);
            if (seenNumbers.has(number)) {
                return true;
            }
            seenNumbers.add(number);
        }

        return false;
    }

    intToArray(num: number): number[] {
        const numString: string = num.toString();
        const digitArray: number[] = numString.split('').map(Number);
        return digitArray;
    }

    containsWord(text: string, word: string[]): boolean {
        let contained = false;
        for (const searchWord of word) {
            if (text.indexOf(searchWord) !== -1) {
                contained = true;
            }
        }
        return contained;
    }
}