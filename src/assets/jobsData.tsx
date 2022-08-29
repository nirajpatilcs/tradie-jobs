// this file stroes jobs data as an array of objects to demonstrate the frontend functionality

const jobs = [
    {
        id: 1, 
        name: "bill gates", 
        contact: "123456789", 
        date: new Date(2022, 0O5, 0O5, 17, 23 ), 
        status: "active",         
    }, 
    {
        id: 2, 
        name: "elon musk ", 
        contact: "23456789", 
        date: new Date(2019, 0O6, 0O5, 17, 23 ), 
        status: "scheduled",         
    }, 
    {
        id: 3, 
        name: "mark zukerburg ", 
        contact: "234234532", 
        date: new Date(2021, 0O5, 0O5, 17, 23 ), 
        status: "active",         
    },
    {
        id: 4, 
        name: "mark zukerburg ", 
        contact: "234234532", 
        date: new Date(2021, 0O5, 0O5, 17, 22 ), 
        status: "active",         
    }
]

export default jobs; 