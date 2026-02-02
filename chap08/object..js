// ピカチュウオブジェクト
let pikachu = {
    name: 'ピカチュウ',
    category: 'ねずみポケモン',
    type: ['でんき'],
    height: 0.4,
    weight: 6.0,
    no: 25,
}


// カビゴン
let kabigon = {
    name: 'カビゴン',
    category: 'いねむりポケモン',
    type: ['ノーマル'],
    height: 2.1,
    weight: 460.0,
    no: 143,
    sleep: function () {
        // メソッド...オブジェクトに所属している関数
        console.log('カビゴンは眠っている');
    }
}

// フシギダネ
let fushigidane = {
    name: 'フシギダネ',
    category: 'たねポケモン',
    type: ['草', '毒'],
    height: 0.7,
    weight: 6.9,
    no: 1,
}


console.log(pikachu);
console.log(pikachu.name);
kabigon.sleep();

let pokemonArray = [pikachu, kabigon, fushigidane];
console.log(pokemonArray);

console.log(pokemonArray[2].type[0]);
console.log(pokemonArray[2].type[1]);

// pokemonArrayとfor文を使って、全ポケモンの名前をコンソールに表示

for (let i = 0; i < pokemonArray.length; i++) {
    console.log(pokemonArray[i].name);
}

//pokemonArrayとfor文を使って、全ポケモンの名前とタイプを以下の例文の用に表示してください。
// 例）フシギダネのタイプは「くさ」「どく」です。
let pokeName = '';
for (let i = 0; i < pokemonArray.length; i++) {
    pokeName = pokemonArray[i].name;
    let pokeType = '';
    for (let j = 0; j < pokemonArray[i].type.length; j++) {
        pokeType += '「' + pokemonArray[i].type[j] + '」';
    }
    console.log(pokeName + 'のタイプは' + pokeType + 'です。');
}

