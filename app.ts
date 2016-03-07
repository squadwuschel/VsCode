
    module App {
        
        /**
         * Person
         */
        export class Person {
            constructor(public name: string) {

            }


            public log(showLog: boolean): void {
                if (showLog) {
                    console.log("Der Name des Nutzers ist: " + this.name)
                }
            }
        }
 


    }

    //VS Code for TypeScript
    //https://code.visualstudio.com/Docs/languages/typescript

    var person = new App.Person("Hallo Welt");
    person.log(true);
