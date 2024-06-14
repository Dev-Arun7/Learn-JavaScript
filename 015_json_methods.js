

persons = [{ "name" : "Arun", "age" : 33, "place" : "Padiyur"},
            {"name" : "Akhil", "age" : 25, "place" : "Iirtty"}]

str = JSON.stringify(persons) // The persons object will be string 
console.log(str)

res = JSON.parse(str) // String will convert back to object
console.log(res)
