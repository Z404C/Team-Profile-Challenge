const Manager = require('./manager')

describe("Manager", ()=>{
    const testManager={
        name: "Kim",
        id: 44,
        email: 'kim@email.com',
        officeNumber: 103,
        role: 'Manager'
    }
    describe("build constructor test", ()=>{
        it('should construct a new instance of the manager class', ()=>{
            const manager = new Manager(testManager);
            expect(manager).toBeInstanceOf(Manager);
        })
        it('should construct a new instance of a manager class with name, id, email, and office number', ()=>{
            const manager = new Manager(testManager);
            expect(manager).toEqual({
                name: 'Kim',
                id: 44,
                email: 'kim@email.com',
                officeNumber: 103,
                role: 'Manager',
            });
        });
    });

    describe('method tests',() =>{
        it("should return id when the getId method is called", ()=>{
            const manager = new Manager(testManager);
            expect(manager.getId()).toEqual(44);
        });

        it("should return name when the getName method is called", ()=>{
            const manager = new Manager(testManager);
            expect(manager.getName()).toEqual('Kim');
        })

        it("should return email when the getEmail method is called", ()=>{
            const manager = new Manager(testManager);
            expect(manager.getEmail()).toEqual('kim@email.com');
        })

        it('should return office number where the getOfficeNumber method is called', ()=>{
            const manager = new Manager(testManager);
            expect(manager.getOfficeNumber()).toEqual(103);
        })

        it("should return manager role when the getRole method is called", ()=>{
            const manager = new Manager(testManager);
            expect(manager.getRole()).toEqual("Manager")
        })
    })
})