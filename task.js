const xhr = new XMLHttpRequest();
const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );


const changeProgress = function(e) {
		progress.value = e.loaded / e.total
}

xhr.upload.addEventListener('progress', (e)=>{
    console.log('событие');
	changeProgress(e);
	});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
})
