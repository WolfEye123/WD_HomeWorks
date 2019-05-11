$(document).ready(() => {
	const userName = $('#userName');
	const userPassword = $('#userPassword');

	$('#enterForm').submit(function (e) {
		if (!userName.val() && !userPassword.val()) {
			$('#emptyFields').removeClass().addClass('showError');
			return false;
		}
	});
});
