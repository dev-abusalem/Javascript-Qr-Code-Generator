let textorurl = document.getElementById('txturl');
let qr_btn = document.getElementById('qr_btn');
let qr_sec = document.getElementById('qr_sec');
let qr_img = document.querySelector('.qr_sec img');
let valueName = document.getElementById('valueName');



qr_btn.addEventListener('click', generateQr);

function generateQr(e){
	e.preventDefault();

	let txturlvalue = textorurl.value;

	// if (txturlvalue == "") {

	// 	qr_sec.classList.add('active');
	// 	qr_sec.innerHTML = `<p class="erro">Ops Please Input Any Data Then Submit !</P>`
		

	// }else{


		
	// 	// qr_btn.innerText = "Qr Code Is Generating.....";

	// 	// qr_img.src =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${txturlvalue}`;

	// 	// console.log(qr_img.src)
		
	// 	// qr_img.addEventListener('load', ()=>{

	// 	// qr_btn.innerText = "Generate Code";
	// 	// qr_sec.classList.add('active');


	// 	// valueName.innerText = txturlvalue; 


	// 	// })



	// }


	if (txturlvalue == "") {

		qr_sec.classList.add('active');
		qr_sec.innerHTML = `<p class="erro">Ops Please Input Any Data Then Submit !</P>`
		

	}else{

		let imgsrc =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${txturlvalue}`;

		qr_sec.innerHTML = 

		`
					<div>
						<h4 id="valueName">${txturlvalue}</h4>
						<img id="qr_img" src=${imgsrc} />	
					</div>
							


		`
		qr_sec.classList.add('active');
		

}

	textorurl.value ="";

}