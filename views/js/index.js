
$(document).ready(function () {

    $('body').on('click', '#submitGeneral', function (e) {
        e.preventDefault(); 
        const form = document.querySelector('form#generalPostForm')
        const formdata = new FormData(form); 

        const post = {
            fullName: formdata.get('fullName').trim(), 
            email: formdata.get('email').trim(), 
            context: formdata.get('context').trim(), 
            phone: formdata.get('phone').trim(), 
        }; 

        axios.post('https://krfeg0uqd9.execute-api.us-east-1.amazonaws.com/prod/general', post)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    })
})