const student = [
    { id: 53, name: "hasan" },
    { id: 93, name: "hoda" },
    { id: 63, name: "lima" },
    { id: 43, name: "lily" },

]
const name = [];

for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const names = element.name;
    name.push(names)

}

console.log(name)

// -----------------------------solve with Map

const names = student.map(i => {
    return i.name;
})

const ids = student.map(i => i.id)

console.log(ids)