import { RectanglePerimeter } from "./rectangle-perimeter"

describe('rectangle perimeter', () => {
    test('should create instance of class', () => {
        const rectanglePerimeter = new RectanglePerimeter()
        expect(rectanglePerimeter).toBeInstanceOf(RectanglePerimeter)
    });

    test('should return the perimeter of a rectangle when length is 10 and width is 4', () => {
        const rectanglePerimeter = new RectanglePerimeter();
        const perimeter = rectanglePerimeter.calculateRectangle(10,4);
        expect(perimeter).toEqual(28);
    });

    test('should return the perimeter of a rectangle when length is 4 and width is 2', () => {
        const rectanglePerimeter = new RectanglePerimeter();
        const perimeter = rectanglePerimeter.calculateRectangle(4,2);
        expect(perimeter).toEqual(12);
    });

});