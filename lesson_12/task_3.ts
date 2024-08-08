//3. Напишите анотации типов к этому классу.
// export class ObjectManipulator {

//     constructor(protected obj) {}

//     public set(key, value) {
//         return new ObjectManipulator({...this.obj, [key]: value});
//     }

//     public get(key) {
//         return this.obj[key];
//     }

//     public delete(key) {
//         const newObj = {...this.obj};
//         delete newObj[key];
//         return new ObjectManipulator(newObj);
//     }

//     public getObject() {
//         return this.obj;
//     }
// }




export class ObjectManipulator {
    // Тип this.obj будет any, так как мы не знаем, какой объект будет передан в конструктор
    constructor(protected obj: any) {}

    // Типы параметров метода set
    public set(key: string, value: any): ObjectManipulator {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    // Тип параметра метода get
    public get(key: string): any {
        return this.obj[key];
    }

    // Типы параметров метода delete
    public delete(key: string): ObjectManipulator {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    // Тип возвращаемого значения метода getObject
    public getObject(): any {
        return this.obj;
    }
}


const myObject = { name: 'John', age: 30 };
const manipulator = new ObjectManipulator(myObject);
const updatedManipulator = manipulator.set('age', 35);
console.log (updatedManipulator)
const name = updatedManipulator.get('name'); 
console.log (name)
const deletedManipulator = manipulator.delete('age'); 
console.log (deletedManipulator)
const finalObject = deletedManipulator.getObject();
console.log (finalObject)