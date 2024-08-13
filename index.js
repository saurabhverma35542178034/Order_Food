let items=document.querySelectorAll('input');
let imgSrc=['https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_1280.jpg',
    'https://media.istockphoto.com/id/1426308134/photo/south-indian-filter-coffee-served-in-a-traditional-tumbler-or-cup-over-roasted-raw-beans.jpg?s=612x612&w=0&k=20&c=0_pG57x7SK2y8hEBpcMvUrmBLtkwwWfdKDD4p4BZqhk=',
    'https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg?cs=srgb&dl=pexels-posawee-suwannaphati-21392-391213.jpg&fm=jpg'
];




document.querySelector('button').addEventListener('click',()=>{
    let img=document.querySelector('#images');
    console.log(img);
    
    
    img.innerHTML="";
    img.style.width='500px';
    img.style.height='500px';
    img.style.objectFit = 'contain'; 

    items.forEach((itm,index)=>{
        if(itm.checked)
        { 
            img.style.fontSize = '20px';
            img.style.color='black';
            img.style.display = 'flex';
            img.style.alignItems = 'center';
            img.style.justifyContent = 'center';
            img.innerHTML="Your order is about to ready";
            
            setTimeout(()=>{
                img.innerHTML=`<img src="${imgSrc[index]}" style="width: 100%; height: 100%; object-fit: contain;">`;

            },2000);
           
        }

        itm.checked = false;
    }

   

)





    // img.style.display='block';
})