const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

const {name, size, skills} = horse;
bio = `${name} is a ${size} horse skilled in ${skills}`
console.log(bio);

bio2 = `${horse.name} is a ${horse.size} horse skilled in ${horse.skills}`
console.log(bio2);