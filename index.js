let orginalurl = document.querySelector('#original')
let output = document.getElementById('output')
let invoutput = document.getElementById('inv-output')
let hookoutput = document.getElementById('hook-output')

document.querySelector("#formrl").addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting
    let orginalurlvalue = orginalurl.value.toString()
    if(!orginalurlvalue) {
        alert('Please enter valid url')
    }
    let youtubeId = orginalurlvalue.split('=')[1]
    let url = `https://www.youtube-nocookie.com/embed/${youtubeId}`
    let invidious = `https://invidious.snopyta.org/watch?v=${youtubeId}`
    let hookurl =`https://hooktube.com/watch?v=${youtubeId}`
    output.href = url
    output.innerText= 'Click Here for no-cookie'
    invoutput.href = invidious
    invoutput.innerText= 'Click Here for invidious'
    hookoutput.href = hookurl
    hookoutput.innerText= 'Click Here for Hooktube'
    output.classList.toggle('d-none')
    invoutput.classList.toggle('d-none')
    hookoutput.classList.toggle('d-none')
});
