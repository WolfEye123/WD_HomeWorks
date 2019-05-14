$(document).ready(() => {
	const userName = $('#userName');
	const userPassword = $('#userPassword');
	const enterForm = $('#enterForm');
	const emptyFields = $('#emptyFields');

	/**
	 * login form validation
	 */
	enterForm.submit(function (e) {
		if (!userName.val() && !userPassword.val()) {
			emptyFields.removeClass().addClass('showError');
			return false;
		}
	});
});
