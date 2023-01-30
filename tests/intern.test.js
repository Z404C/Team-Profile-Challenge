const Intern = require("./intern")

describe("Intern", ()=>{
    const testIntern={
        name: "Jane",
        id: 3,
        email: "jane@email.com",
        school: "USC"
    };

    describe("build constructor tests", ()=>{
        it("should construct a new instance of the intern class", ()=>{
            const intern = new Intern(testIntern);
            expect(intern).toBeInstanceOf(Intern);
        })

        it("should construct a new instance of an intern class with name, id, email, and office number", () =>{
            const intern = new Intern(testIntern);
            expect(intern).toEqual({
                name: "Jane",
                id: 3, 
                email: "jane@email.com",
                school: "USC",
                role: "Intern",
            })
        })

    })

    describe("test methods", ()=>{
        it("should return id when the getId method is called", ()=>{
            const intern = new Intern(testIntern);
            expect(intern.getId()).toEqual(3);
        })

        it("should return name when getName method called", ()=>{
            const intern = new Intern(testIntern);
            expect(intern.getName()).toEqual("Jane")
        })

        it("should return email when getEmail is method is called", ()=>{
            const intern = new Intern(testIntern);
            expect(intern.getEmail()).toEqual("jane@email.com")
        })

        it("should return school when the getSchool method is called", ()=>{
            const intern = new Intern(testIntern);
            expect(intern.getSchool()).toEqual("USC")
        })

        it("should return intern role when the getRole method is called", ()=>{
            const intern = new Intern(testIntern);
            expect(intern.getRole()).toEqual("Intern")
        })
    })
})