url = assignments.reaktor.com/birdnest/drones

let response = fetch(url)
    .then(res => {
        return res.json()
    })
    .catch(function(err) {
        console.log(error.message)
});