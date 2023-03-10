const Engineer = require('./engineer')

describe("Engineer", () =>{
    const testEngineer = {
        name: "ron",
        id: 2, 
        email: "ron@email.com",
        github: "www.github.com/ron",
    }
    describe("making constructor tests", ()=> {
        it("should construct a new instance of the engineer class", ()=>{
            const engineer = new Engineer(testEngineer);
            expect(engineer).toBeInstanceOf(Engineer);
        });

        it("should construct a new instance of an engineer class with name, id, email, and github profile", ()=>{
            const engineer = new Engineer(testEngineer);
            expect(engineer).toEqual({
                name: "ron", 
                id: 2, 
                email: "ron@email.com",
                github: "www.github.com/ron",
                role: "Engineer",
            });
        });
    });

    describe("method testing", ()=>{
        it("should return id when the getId method is called", ()=>{
            const engineer = new Engineer(testEngineer);
            expect(engineer.getId()).toEqual(2)
        });

        it("should return name when the getName method is called", ()=>{
            const engineer = new Engineer(testEngineer);
            expect(engineer.getName()).toEqual("ron")
        });

        it("should return email when getEmail method is called", ()=>{
            const engineer = new Engineer(testEngineer);
            expect(engineer.getEmail()).toEqual("ron@email.com")
        });

        it("should return github profile URL when the getGithub method is called", ()=>{
            const engineer = new Engineer(testEngineer);
            expect(engineer.getGithub()).toEqual("www.github.com/ron")
        });

        it("should return engineer role when the getRole method is called", ()=>{
            const engineer = new Engineer(testEngineer);
            expect(engineer.getRole()).toEqual("Engineer");
        });
    })


})