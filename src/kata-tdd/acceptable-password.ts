export class AcceptablePassword {
    validatePassword(password: string): boolean {
        let numbers = password.match(/\d+(\.\d+)?/g);
        if (numbers) {
            if (numbers[0].length > 1) {
                return false;
            } else {
                return password.length > 6;
            }
        } else {
            return false;
        }
    }
}