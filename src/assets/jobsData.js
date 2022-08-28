// this file stroes jobs data as an array of objects to demonstrate the frontend functionality

const jobs = [
    {
        id: "job1", 
        name: "bill gates", 
        contact: 123456789, 
        date: "28/08/2022", 
        time: "10am",
        status: "active",         
    }, 
    {
        id: "job2", 
        name: "elon musk ", 
        contact: 23456789, 
        date: "29/09/2022", 
        time: "11am",
        status: "scheduled",         
    }
]

//unique job identifier 
// status: 'scheduled' , 'active, 'invoicing' , 'to priced' , 'completed' 
// creation date and time
// name, contact details 