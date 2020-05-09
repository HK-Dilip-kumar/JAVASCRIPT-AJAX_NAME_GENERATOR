document.querySelector('#generate-names').addEventListener('submit',loadNames);

//Execute the function to query the API
function loadNames(e){
            e.preventDefault();

            const origin=document.getElementById('country').value;
            const genre=document.getElementById('genre').value;
            const amount= document.getElementById('quantity').value;

            //build the url
            let url="https://uinames.com/api/?";

            if(origin!==''){
                url += `region=${origin}`;
            }

            if(genre!==''){
                url += `genre=${genre}`;
            }

            if(amount!==''){
                url += `amount=${origin}`;
            }

            // console.log(url);

            //now make the ajax call
            const xhr= new XMLHttpRequest();

            xhr.open('GET','url',true);

            xhr.onload =function(){
                if(this.status === 200){
                    const names=JSON.parse(this.responseText);

                    let html=`<h2>Generated Names</h2>`
                        html+='<ul  names "list">';
                        names.forEach(function(name){
                            html+= `
                                <li>${name.name}</li>
                            `;
                        document.querySelector('#result').innerHTML=html;
                        });

                    // console.log(names);

                }
            }

            xhr.send();
}