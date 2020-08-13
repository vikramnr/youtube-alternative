let orginalurl = document.querySelector('#original')
let output = document.getElementById('output')
let invoutput = document.getElementById('inv-output')

document.querySelector("#formrl").addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting
    let orginalurlvalue = orginalurl.value.toString()
    let youtubeId = orginalurlvalue.split('=')[1]
    let url = `https://www.youtube-nocookie.com/embed/${youtubeId}`
    let invidious = `https://invidious.snopyta.org/watch?v=${youtubeId}`
    output.href = url
    output.innerText= 'Click Here for no-cookie'
    invoutput.href = invidious
    invoutput.innerText= 'Click Here for invidious'
});
