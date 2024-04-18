let attempt = 0;
  
    function main() {

      var form = document.getElementById("form");

        form.addEventListener("submit", (e) =>{
          e.preventDefault();
          var username = document.getElementById("name").value;
          if (!username)  {
            alert("Error: Name field cannot be empty.");
          } else{ 
          document.getElementById("game-start").style.display = "block";
          document.getElementById("form").style.display = "none";
          //Access ID from Player-name and Display there
        document.getElementById("player-name").innerText = username;}
        });
        }
      

      //Generate TableData from 1 to 100
      const tableData = [];

      for (let i = 1; i <= 100; i++) {
        //Push Elements 1 to 100
        tableData.push(i);
      }
      console.log(tableData);
      tableData.sort(() => Math.random() - 0.5);

      //Access Table Tag
      let table = document.getElementById("my-game");
      let row,col,counter = 0;
      let primesArray = [2, 3, 5, 7];
      let visitedElements = [];
      for (let i = 1; i <= 10; i++) {
        // Generate Row Tags <tr>
        row = document.createElement("tr");
        for (let j = 1; j <= 10; j++) {
          //Generate <td> Tags
          col = document.createElement("td");

          //Assign ID From Counter
          col.id = tableData[counter];

          //Add Inner Text from Table Data
          // col.innerText = tableData[counter];

          col.addEventListener("click", function (event) {
            // console.log(event.target.id);
            let clickedNumber = event.target.id;
            console.log(clickedNumber);
            if (clickedNumber == 1) {
              var audio = document.getElementById("audio1");
                      audio.play();
              alert("You are a Winner, Congratulations!!!!");
              location.reload("/");
              // if the user select the prime number between 1 and 10, the games get over 
            } else if (primesArray.includes(+clickedNumber)) {
              var audio = document.getElementById("audio1");
                      audio.play();

              alert("You are Loser! Better Luck Next Time");
              location.reload("/");
              // using else if to prevent the selection of already selected box
            } else if (visitedElements.includes(+clickedNumber)) {
              alert("The Block is Already Selected");
            } else {
              for (let i = +clickedNumber; i <= 100; i++) {
                if (i % +clickedNumber == 0) {
                  document.getElementById(i).style.backgroundColor =
                    "aquamarine";
                  visitedElements.push(i);
                  var audio = document.getElementById("audio3");
                      audio.play();
                }
              }
              attempt++;
            }
            document.getElementById("attempts").innerText = attempt;
          });

          //Append the td Tag to the Row
          row.appendChild(col);

          //Incement Count
          counter++;
        }

        //Append the Whole row to Table
        table.appendChild(row);
      }
  

    //Invoke the Function
    main();