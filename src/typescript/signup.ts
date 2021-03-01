let formPosition = 1;
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const pageBody = document.getElementById("pageBody");

if (pageBody && backBtn && nextBtn) {
	nextBtn.addEventListener("click", () => {
		switch (formPosition) {
			case 1:
				pageBody.style.transform = "translateX(-100%)";
				backBtn.style.visibility = "visible";
				formPosition++;
				break;
			case 2:
				pageBody.style.transform = "translateX(-200%)";
				formPosition++;
				break;
			default:
				break;
		}
	});

	backBtn.addEventListener("click", () => {
		switch (formPosition) {
			case 2:
				pageBody.style.transform = "translateX(0%)";
				backBtn.style.visibility = "hidden";
				formPosition--;
				break;
			case 3:
				pageBody.style.transform = "translateX(-100%)";
				formPosition--;
				break;
			default:
				break;
		}
	});
}

const daySelect = document.getElementById("dayDate");
const monthSelect = document.getElementById("monthDate");
const yearSelect = document.getElementById("yearDate");

for (let index = 1; index <= 31; index++) {
	const opt = document.createElement("option");
	opt.value = index.toString();
	opt.innerText = index.toString();
	daySelect?.append(opt);
}

for (let index = 0; index < 12; index++) {
	const opt = document.createElement("option");
	let month = new Date(2021, index, 1).toLocaleString("default", {
		month: "long",
	});
	opt.value = month;
	opt.innerText = month;
	monthSelect?.append(opt);
}

for (let index = new Date().getFullYear() - 15; index >= 1900; index--) {
	const opt = document.createElement("option");
	opt.value = index.toString();
	opt.innerText = index.toString();
	yearSelect?.append(opt);
}

let switchType = true;
const usePhone = document.getElementById("usePhone");
const useEmail = document.getElementById("useEmail");
const switchTypeBtn = document.getElementById("switchType");

if (usePhone && useEmail && switchTypeBtn) {
	switchTypeBtn.addEventListener("click", () => {
		if (switchType) {
			useEmail.style.display = "block";
			usePhone.style.display = "none";
			switchType = !switchType;
		} else {
			useEmail.style.display = "none";
			usePhone.style.display = "block";
			switchType = !switchType;
		}
	});
}
