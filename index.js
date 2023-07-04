arrayFunction.info=[];

// reseve data
function arrayFunction(username,password)
{
this.username=username;
this.password=password;

arrayFunction.info.push(this);
this.saveData();
console.log(arrayFunction.info);
}
// save data
arrayFunction.prototype.saveData=function()
{
const stringInfo=JSON.stringify(arrayFunction.info);
localStorage.setItem('Sign-Info',stringInfo);

}

// send user inputs
function signInInformation(e)
{
    e.preventDefault();
let userName=e.target.userName.value;
let passWord=e.target.passWord.value;
const signInfo = new arrayFunction(userName,passWord)
}
// event
const signIn=document.getElementById('signIn')
signIn.addEventListener('submit',signInInformation)
