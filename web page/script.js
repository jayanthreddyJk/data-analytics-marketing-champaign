const homeLink = document.getElementById("home-link");
const reportLink = document.getElementById("report-link");
const dashboardLink = document.getElementById("dashboard-link");
const storyLink = document.getElementById("story-link");

homeLink.addEventListener("click", () => {
	homeLink.classList.add("active");
	reportLink.classList.remove("active");
	dashboardLink.classList.remove("active");
	storyLink.classList.remove("active");
});

reportLink.addEventListener("click", () => {
	homeLink.classList.remove("active");
	reportLink.classList.add("active");
	dashboardLink.classList.remove("active");
	storyLink.classList.remove("active");
});

dashboardLink.addEventListener("click", () => {
	homeLink.classList.remove("active");
	reportLink.classList.remove("active");
	dashboardLink.classList.add("active");
	storyLink.classList.remove("active");
});

storyLink.addEventListener("click", () => {
	homeLink.classList.remove("active");
	reportLink.classList.remove("active");
	dashboardLink.classList.remove("active");
	storyLink.classList.add("active");
});
