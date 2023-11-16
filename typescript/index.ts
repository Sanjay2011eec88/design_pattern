// Define an interface for a shape
interface Shape {
    area(): number;
  
    perimeter(): number;
  }
  
  // Implement the Shape interface with a Circle class
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    perimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Implement the Shape interface with a Rectangle class
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    area(): number {
      return this.width * this.height;
    }
  
    perimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  // Function to calculate the total area of an array of shapes
  function calculateTotalArea(shapes: Shape[]): number {
    let totalArea = 0;
  
    for (const shape of shapes) {
      totalArea += shape.area();
    }
  
    return totalArea;
  }
  
  // Create instances of Circle and Rectangle
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  // Calculate the total area using the array of shapes
  const shapes: Shape[] = [circle, rectangle];
  console.log("Total area:", calculateTotalArea(shapes)); // Output: Total area: 103.53981633974483