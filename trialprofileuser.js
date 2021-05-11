var db = firebase.firestore();
function check()
{
   var inputtext = document.getElementById("id1").value;
   var inputtext2 = document.getElementById("id5").value;
   var inputtext3 = document.getElementById("id3").value;
   var inputtext4 = document.getElementById("id4").value;
   var inputtext5 = document.getElementById("id6").value;
   var e = document.getElementById("select1");
   var strUser = e.options[e.selectedIndex].text;
   var f = document.getElementById("select2");
   var strUser1 = f.options[f.selectedIndex].text;
   var g = document.getElementById("select3");
   var strUser2 = g.options[g.selectedIndex].text;
const now = new Date();


   db.collection("Users").doc(inputtext4).set({
    username: inputtext2,
    emailId:inputtext,
    address:inputtext3,
    number:inputtext4,
    hidenumber: true,
    status:"pending",
    createdAt:now,
    branch:strUser,
    year_of_pass:strUser1,
    password: inputtext5,
    university:strUser2,
    block:"",
    company:"",
    designation:"",
    experience:"",
    gender:"",
    img_url:"",
    pg_clg_name:"",
    pg_university:"",
    pg_year_of_pass:"",
    teachingexperience:"",
    rmno:"",
    role:"",
    year_of_join:""

})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

}
