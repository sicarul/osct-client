all: 
	@clear
	@ng2-html2js
	@rm -r ./build
	@component build
	@mv build/sicarul-angular-bootstrap build/campaignFlow
