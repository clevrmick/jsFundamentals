// spread in object works similar like that of array, it coppies or expand object


const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
};

const dogs = {
    ...canine,
    isPet: true,
    addorable: true
};

const houseCat = {
    ...feline,
    isGrumpey: true,
    personality: 'unpredictable'
}