function loadDoc() {
    fetch("https://weatherinfo.p.rapidapi.com/api/weather/?ip_address=174.20.20.55", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherinfo.p.rapidapi.com",
		"x-rapidapi-key": "fe9ebde250msh0235fe839eb6616p14f29ajsn39295f63dc23"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}
