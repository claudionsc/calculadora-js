var operator = document.querySelector(".operator")
            
            var result = document.querySelector("#result")
            var btn = document.querySelectorAll('[id*=number]')
            var h1 = document.querySelector('.h1')
            var td = document.querySelector('td')
            var tbody = document.querySelector('tbody')
            var thead = document.querySelector('#thead')

           

           const num1 = {
            num: 1
           }
           const num2 = {
            num: 2
           }
           const num3 = {
            num: 3
           }
           const num4 = {
            num: 4
           }
           const num5 = {
            num: 5
           }
           const num6 = {
            num: 6
           }
           const num7 = {
            num: 7
           }
           const num8 = {
            num: 8
           }
           const num9 = {
            num: 9
           }
           const num0 = {
            num: 0
           }

           const mais = {
            num: "+"
           }

           const menos = {
            num: "-"
           }
           const div = {
            num: "/"
           }
           const mult = {
            num: "*"
           }

       
        

           function capturaNum(obj){
            
            
           
            let tableHead = document.createElement('th')
            var exibeNum = this.num
            tableHead.innerHTML = exibeNum

          
            
            h1.appendChild(tableHead) == `
            <th>${tableHead}</th>
            
            `
            td.innerHTML = this.num
     }


    

        function resultadoFinal(){

           var resultadoB =  document.querySelector('.h1').textContent;
            
           thead.classList.add('calculadoh1')
           tbody.classList.add('calculadotbody')

           if(resultadoB)
           {

            document.querySelector('td').innerHTML = eval(resultadoB)
            
        }
            

        
        }

        function deletar(){
            td.innerHTML = "0";
            h1.innerHTML = ""
        }
