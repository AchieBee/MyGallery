
//let array = []
//let object = {key : value}

let images = [
    {
        owner : 'John',
        imageUrl : 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : 1250
    },
    {
        owner : 'Marylyne',
        imageUrl : 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : 1700
    },
    {
        owner : 'Linus',
        imageUrl : 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600',
        price : 6500
    },
    {
        owner : 'Geoffrey',
        imageUrl : 'https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : 2500
    },
    {
        owner : 'Gillian',
        imageUrl : 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : 1000
    }
];

//LOOPING
//for...of
//while
//for...in(objects)
//for each
//do...while
//map

for (image of images){
    console.log(image)

    const newDiv = document.createElement("div")
    newDiv.innerHTML = `
    <img src = ${image.imageUrl} alt= "art from my Gallery"/>
    <h4>${image.owner}</h4>
    <p>${image.price}</p>
    `
    document.body.append(newDiv)
};


