let select=document.querySelector('select');

let showcontent=function(){
    const val=select.value;
    let image=document.querySelector("#image");
    let para=document.querySelector("#para");
    switch (val) {
        case "1":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="img21.jpg"
                }
                if(i==2){
                    img.src="img22.jpg"
                }
                if(i==3){
                    img.src="img23.jpg"
                }
                if(i==4){
                    img.src="img24.jpg"
                }
                if(i==5){
                    img.src="img25.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="Heyy! Myself Disha Sachdeva. I am a hardworking Software Developer"
            document.body.style.backgroundColor="blue";
            break;
        case "2":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="img16.jpg"
                }
                if(i==2){
                    img.src="img17.jpg"
                }
                if(i==3){
                    img.src="img18.jpg"
                }
                if(i==4){
                    img.src="img19.jpg"
                }
                if(i==5){
                    img.src="img20.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="This is Ankit. He is a nice person, he is very kind and helpful, he is very consistent in completing his work but he needs break after every pal"
            document.body.style.backgroundColor="purple";
            break;
        case "3":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="img6.jpg"
                }
                if(i==2){
                    img.src="img7.jpg"
                }
                if(i==3){
                    img.src="img8.jpg"
                }
                if(i==4){
                    img.src="img9.jpg"
                }
                if(i==5){
                    img.src="img10.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="This is Nitanshi. She is so caring and helpful, She always makes me smile"
            document.body.style.backgroundColor="pink";
            break;
        case "4":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="img11.jpg"
                }
                if(i==2){
                    img.src="img12.jpg"
                }
                if(i==3){
                    img.src="img13.jpg"
                }
                if(i==4){
                    img.src="img14.jpg"
                }
                if(i==5){
                    img.src="img15.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="This is Vansh. He is so Hardworking and Puntual person."
            document.body.style.backgroundColor="yellow";
            break;
        
        default:
            break;
        
    }
}
select.addEventListener('change',showcontent);
