var App;
(function (App) {
    /**
    * Person
    */
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.log = function (showLog) {
            if (showLog) {
                console.log("Der Name des Nutzers ist: " + this.name);
            }
        };
        return Person;
    })();
    App.Person = Person;
})(App || (App = {}));

//VS Code for TypeScript
//https://code.visualstudio.com/Docs/languages/typescript
var person = new App.Person("Hallo Welt");
person.log(true);
