import { AcceptablePassword } from "./acceptable-password";

describe('rectangle perimeter', () => {
    let acceptablePassword: AcceptablePassword;
    beforeEach(() => {
        acceptablePassword = new AcceptablePassword();
    });

    test('should create instance of class', () => {
        const acceptablePassword = new AcceptablePassword();
        expect(acceptablePassword).toBeInstanceOf(AcceptablePassword);
    });

    test('should return true when the length should be bigger than 6', () => {
        const result = acceptablePassword.validatePassword("abc3efg");
        expect(result).toBeTruthy();
    });

    test('should return false when the length should be smaller than 6', () => {
        const result = acceptablePassword.validatePassword("short");
        expect(result).toBeFalsy();
    });

    test('should return true contain at least one digit', () => {
        const result = acceptablePassword.validatePassword("abcd13fg");
        expect(result).toBeTruthy();
    });

    test('should return false contain at least one digit', () => {
        const result = acceptablePassword.validatePassword("abc01f");
        expect(result).toBeFalsy();
    });

    test('should return false when password only number', () => {
        const result = acceptablePassword.validatePassword("1234567");
        expect(result).toBeFalsy();
    });

    test('should return false when password only string', () => {
        const result = acceptablePassword.validatePassword("abcdefg");
        expect(result).toBeFalsy();
    });

    test('should return true when password is longer than 9 and password is only number', () => {
        const result = acceptablePassword.validatePassword("12345678910");
        expect(result).toBeTruthy();
    });

    test('should return true when password is longer than 9 and password is only string', () => {
        const result = acceptablePassword.validatePassword("muchlonger");
        expect(result).toBeTruthy();
    });

    test('should return false when password is contain the word "password" in any case', () => {
        const result = acceptablePassword.validatePassword("password12345");
        expect(result).toBeFalsy();
    });

    test('should return false when password is contain the word "PASSWORD" in any case', () => {
        const result = acceptablePassword.validatePassword("PASSWORD12345");
        expect(result).toBeFalsy();
    });

    test('should return true when password is contain the word "pass1234word" in any case', () => {
        const result = acceptablePassword.validatePassword("pass1234word");
        expect(result).toBeTruthy();
    });
});
