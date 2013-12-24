all: 
	@clear
	@ng2-html2js
	@rm -r ./build
	@component build
	@cp build/sicarul-angular-bootstrap/img/* build/campaignFlow/img
