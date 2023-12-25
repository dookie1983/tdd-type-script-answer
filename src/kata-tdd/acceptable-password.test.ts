import { AcceptablePassword } from "./acceptable-password";

describe('rectangle perimeter', () => {
    let acceptablePassword: AcceptablePassword;
    beforeEach(() => {
        acceptablePassword = new AcceptablePassword()
    });

    test('should create instance of class', () => {
        const acceptablePassword = new AcceptablePassword()
        expect(acceptablePassword).toBeInstanceOf(AcceptablePassword)
    });

    test('should return true when the length should be bigger than 6', () => {
        const result = acceptablePassword.validatePassword("abc3efg");
        expect(result).toBeTruthy()
    });

    test('should return false when the length should be smaller than 6', () => {
        const result = acceptablePassword.validatePassword("short");
        expect(result).toBeFalsy()
    });

    test('should return true contain at least one digit', () => {
        const result = acceptablePassword.validatePassword("abcd1fg");
        expect(result).toBeTruthy()
    });

    test('should return false contain at least one digit', () => {
        const result = acceptablePassword.validatePassword("abc01f");
        expect(result).toBeFalsy()
    });

    test('should return false when password only number', () => {
        const result = acceptablePassword.validatePassword("123456");
        expect(result).toBeFalsy()
    });

    test('should return false when password only string', () => {
        const result = acceptablePassword.validatePassword("abcdefg");
        expect(result).toBeFalsy()
    });

});
