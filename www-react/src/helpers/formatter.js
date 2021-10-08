

export const dateToString = (date, time= null) => {
	const timeZone = 'Europe/Brussels';
	const event = new Date(date);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	if(date && date !== '')
    	return event.toLocaleDateString('fr-FR', options) 
   	return '';
}

export const timeToString = (date, time= null) => {
	const timeZone = 'Europe/Brussels';
	const event = new Date(date);
	const options = { hour:'numeric', minute: 'numeric' };
	if(date && date !== '')
    	return event.toLocaleTimeString('fr-FR', options)
   	return '';
}
export const textLimit = (string) => {
	if(string) return string.length > 125 ? string.substring(0,125)+'...' : string;
	return '';	
}
export const textLimitValue = (string, value, link) => {
	if(string) return string.length > value ? string.substring(0,value)+ '</p><a href=' + link + ' class="link-text-limit"> Lire la suite ...</a>' : string;
	return '';	
}

