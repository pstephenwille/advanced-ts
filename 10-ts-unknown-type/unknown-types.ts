const halloweenCostumeIdeas: any = ['😱', '\u{1F680}',  '\u{1F681}👻', '👽'];

halloweenCostumeIdeas.indexOf('👽');
halloweenCostumeIdeas.a.b.c.d;
halloweenCostumeIdeas();


function randomCostume(ideas: string[]) {
    return ideas[Math.floor(Math.random() * ideas.length)];
}

randomCostume(halloweenCostumeIdeas);


// starting out...

const human = { name: "John", age: 25 };

function printAge(human: any) {
    console.log(human.age);
}

printAge(human);

// some time later...

(function () {


    interface IHuman {
        name: string;
        age: number;
    }

    const human: IHuman = { name: "John", age: 25 };

    function printAge(human: IHuman) {
        console.log(human.age);
    }

    printAge(human);

})();
