var students = [
    {
        name: "kiran",
        subjects: [{
            subjectName: "Maths",
            marks: 50
        }]
    },
    {
        name: "John",
        subjects: [{
                subjectName: "abcd",
                marks: 50
        },
            {
                subjectName: "xyz",
                marks: 50
        }]
    }
]

var products =[{
    name:"Tshirts",
    price:"200",
    url:"http:////...",
    sizes:[{size:"S",
            isAvialable:true},{size:"M",
            isAvialable:false},
          {size:"L",
            isAvialable:true},
          {size:"XL",
            isAvialable:false}]
},
               {
    name:"Shoes",
    price:"2000",
    url:"http:////...",
    sizesAvailable:["5","6","7","8"]
},
              ];

products[0].sizesAvailable[2];