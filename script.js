const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')


const testimonials = [
	{
		name: 'Miyah Myles',
		position: 'Marketing',
		photo: 'https://randomuser.me/api/portraits/women/46.jpg',
		text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART and PIXELS - without a glitch, every time.",
	},
	
	{
		name: 'June Cha',
		position: 'Software Engineer',
		photo: 'https://randomuser.me/api/portraits/women/44.jpg',
		text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART and PIXELS - without a glitch, every time.",
	},
	
	{
		name: 'Ilda Niskanen',
		position: 'Data Entry',
		photo: 'https://randomuser.me/api/portraits/women/68.jpg',
		text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART and PIXELS - without a glitch, every time.",
	},
	
	{
		name: 'Renee Sims',
		position: 'Receptionist',
		photo: 'https://randomuser.me/api/portraits/women/65.jpg',
		text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART and PIXELS - without a glitch, every time.",
	},
	
	{
		name: 'Jonathan Nunfiez',
		position: 'Graphic Designer',
		photo: 'https://randomuser.me/api/portraits/women/46.jpg',
		text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART and PIXELS - without a glitch, every time.",
	},
]

let idx = 1

function updateTestimonal() {
	const { name, position, photo, text } = testimonals[idx]
	
	testimonal.innnerHTML = text
	userImage.src = photo
	username.innerHTML = name
	role.innerHTML =  position
	
	idx++
	
	if(idx > testimonials.length - 1) {
	   
		idx = 0
		
	   }
}

SetInterval(updateTestimonial, 10000)