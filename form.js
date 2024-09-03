
const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector("#email");
const password=document.querySelector('#password');
const contact=document.querySelector('#contact');
const msg=document.querySelector('#message');
const successMsg=document.getElementById('success');

form.addEventListener('submit', (e) => {
           
    if(!validateInputs())
            {
                e.preventDefault(); 
            }

            if (validateInputs()) 
            {
                
                successMsg.textContent = "Congratulations! Form Submitted Successfully!";
                username.value="";
                email.value="";
                password.value="";
                contact.value="";
                msg.value="";
                username.style.borderColor="skyblue";
                email.style.borderColor="skyblue";
                password.style.borderColor="skyblue";
                contact.style.borderColor="skyblue";
                msg.style.borderColor="skyblue";

                setTimeout(function() {
                    successMsg.innerHTML = '';
                },5000); 
            
            }
        });

    function validateInputs()
    {
        const usernameVal=username.value.trim();
        const emailVal=email.value.trim();
        const passwordVal=password.value.trim();
        const contactVal=contact.value.trim();
        const msgVal=msg.value.trim();

        let success=true;

        if(usernameVal==='')
        {
            success=false;
            setError(username,'Username is required');
        }
        else
        {
            setSuccess(username);
        }

        if(emailVal==='')
        {
            success=false;
            setError(email,'Email is required');
        }
        else if(!validateEmail(emailVal))
        {
            success=false;
            setError(email,'Please Enter a valid Email');  
        }
        else
        {
            setSuccess(email);
        }

        if(passwordVal==='')

            {
                success=false;
                setError(password,'Password required is not less than 8 characters')
            }
            else if(passwordVal.length<8)
            {
                success=false;
                setError(password,'Password must be atleast in 8 characters')
            }
            else
            {
                setSuccess(password);
            }
        if(contactVal==='')
            {
                success=false;
                setError(contact,'Contact number is required')

            }
            else if(contactVal.length!=10)
            {
                success=false;
                setError(contact,'Contact number must be in 10 digit');
            }
            else
            {
                setSuccess(contact);
            }

             if (msgVal === "") 
            {
               success = false;
               setError(msg, "Message should contain atleast 25 characters");
             }
             else if(msgVal.length<25)
             {
                success = false;
                setError(msg, "Message should contain atleast 25 characters");

             }
            else 
            {
               setSuccess(msg);
             }

            return success;
    }
 
    function setError(element,message)
    {
        const inputGroup=element.parentElement;
        const errorElement=inputGroup.querySelector('.error');
        errorElement.innerHTML=message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }
    
    function setSuccess(element)
    {
        const inputGroup=element.parentElement;
        const errorElement=inputGroup.querySelector(".error");
        errorElement.innerHTML='';
        inputGroup.classList.add("success");
        inputGroup.classList.remove("error");   
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    



    
    
    


