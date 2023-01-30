const employee = require('./employee')

//'it' might need to be changed to "should return a card with members info."
describe("Employee", () => {
    const testEmployee = {
        name: "joe",
        id: 1,
        email: "joe@email.com",
    };

    describe("constructor tests", ()=>{
        it("should construct a new instance of an employee class", ()=>{
            const employee = new Employee(testEmployee);
            expect(employee).toBeInstanceOf(Employee);
        });
        it("should constuct a new instance of an employee class with name, id, and email", ()=>{
            const employee = new Employee(testEmployee);
            expect(employee).toEqual({
                name: "joe",
                id: 1,
                email:"joe@email.com",
            });
        });
    });
    describe("should test for methods", ()=>{
        it("should return id when the getid method is called", ()=>{
            const employee = new Employee(testEmployee);
            expect(employee.getId()).toEqual(1);
        });

        it("should return name when getName method is called", ()=>{
            const employee = new Employee(testEmployee);
            expect(employee.getName()).toEqual("joe");
        });

        it("should return name when getEmail method is called", ()=>{
            const employee = new Employee(testEmployee);
            expect(employee.getEmail()).toEqual("joe@email.com");
        });


    })
  

})